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
    const socket = new SockJS("http://localhost:8080/chatRoom");
    WebSocketService.stompClient = Stomp.over(socket);

    WebSocketService.stompClient.connect({}, () => {
      console.log("WebSocket connected");

      // Subscribe to the topic where the server sends messages
      WebSocketService.stompClient.subscribe(
        "/topic/user/" + userSubscriptionId,
        (message) => {
          const receivedMessage = JSON.parse(message.body);
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

  sendMessage: (userId, message) => {
    if (WebSocketService.stompClient) {
      const payload = {
        userId,
        content: message,
      };
      WebSocketService.stompClient.send(
        `/ws/send-message/${userId}`,
        {},
        JSON.stringify(payload)
      );
    }
  },

  closeWebSocket: () => {
    if (WebSocketService.stompClient) {
      WebSocketService.stompClient.disconnect();
    }
  },
};

export default WebSocketService;
