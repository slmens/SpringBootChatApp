// WebSocketService.js
import Stomp from "stompjs";
import SockJS from "sockjs-client";

const WebSocketService = {
  stompClient: null,

  initializeWebSocket: (
    onMessageReceived,
    handleReceivedGlobalMessages,
    userSubscriptionId
  ) => {
    WebSocketService.closeWebSocket();
    const socket = new SockJS("http://localhost:8080/chatRoom");
    WebSocketService.stompClient = Stomp.over(socket);

    WebSocketService.stompClient.connect({}, () => {
      console.log("WebSocket connected");

      // Subscribe to the topic where the server sends messages
      WebSocketService.stompClient.subscribe(
        "/topic/user/" + userSubscriptionId,
        (message) => {
          const receivedMessage = JSON.parse(message.body);
          console.log(message);
          console.log(receivedMessage);
          onMessageReceived(receivedMessage);
        }
      );

      WebSocketService.stompClient.subscribe(
        `/topic/globalNotifications`,
        function (message) {
          handleReceivedGlobalMessages(JSON.parse(message.body));
        }
      );
    });
  },

  sendMessage: (
    userId,
    message,
    currentUserId,
    handleSendedPrivateMessages
  ) => {
    const currentDateTime = new Date();
    let payload = null;
    console.log(currentUserId);
    if (WebSocketService.stompClient) {
      payload = {
        senderUserId: currentUserId,
        content: message,
        sendTime: currentDateTime,
      };
      WebSocketService.stompClient.send(
        `/ws/send-message/${userId}`,
        {},
        JSON.stringify(payload)
      );
    }

    handleSendedPrivateMessages(payload, userId);
  },

  closeWebSocket: () => {
    if (WebSocketService.stompClient) {
      WebSocketService.stompClient.disconnect();
    }
  },
};

export default WebSocketService;
