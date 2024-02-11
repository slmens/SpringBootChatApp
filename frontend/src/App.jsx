import { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import "./App.css";
import WebSocketService from "../src/util/WebSocketService";

function App() {
  const isConnected = useRef(false);
  let currentUserId = Math.floor(Math.random() * 1000);
  if (!localStorage.getItem("chatUserId")) {
    localStorage.setItem("chatUserId", currentUserId);
  }

  currentUserId = localStorage.getItem("chatUserId");

  console.log("user id : " + currentUserId);

  const [messages, setMessages] = useState({});
  const [chats, setChats] = useState([]);

  // Right cssde sorun var overflowda

  // Aynı user id ler olamasın bunların kaydını tut

  // Eğer karşı taraf chati açmadıysa mesaj ona gitmiyor yani yeni bir chat oluşturulması da lazım eğer gelen mesajın sahibiyle chatimiz yoksa

  // bildirimler biriksin

  useEffect(() => {
    if (!isConnected.current) {
      WebSocketService.initializeWebSocket(
        handleComingPrivateMessages,
        handleReceivedGlobalMessages,
        currentUserId
      );
    }
    isConnected.current = true;
    /*return () => {
        WebSocketService.closeWebSocket();
    };*/
  }, []);

  const notifyFunc = (message) => {
    console.log(message);
    toast("Deleting All Messages!");
  };

  const sendMessage = (message, userId) => {
    WebSocketService.sendMessage(
      userId,
      message,
      currentUserId,
      handleSendedPrivateMessages
    );
  };

  function handleComingPrivateMessages(message) {
    setMessages((prevMessages) => {
      const updatedMessages = { ...prevMessages };

      if (updatedMessages[message.senderUserId]) {
        updatedMessages[message.senderUserId] = [
          ...updatedMessages[message.senderUserId],
          {
            text: message.content,
            type: "incoming",
            sendTime: message.sendTime,
          },
        ];
      } else {
        updatedMessages[message.senderUserId] = [
          {
            text: message.content,
            type: "incoming",
            sendTime: message.sendTime,
          },
        ];
      }

      return updatedMessages;
    });

    setChats((prevChats) => {
      if (!prevChats.includes(message.senderUserId)) {
        return [...prevChats, `${message.senderUserId}`];
      }
      return prevChats;
    });
  }

  function handleSendedPrivateMessages(message, userId) {
    setMessages((prevMessages) => {
      const updatedMessages = { ...prevMessages };

      if (updatedMessages[userId]) {
        updatedMessages[userId].push({
          text: message.content,
          type: "sent", // Fix: Set the correct type as "sent"
          sendTime: message.sendTime,
        });
      } else {
        updatedMessages[userId] = [
          {
            text: message.content,
            type: "sent",
            sendTime: message.sendTime,
          },
        ];
      }

      return updatedMessages;
    });
  }

  function handleReceivedGlobalMessages(message) {
    notifyFunc(message);
  }

  /*function handleReceivedNotification(message) {
    notifyFunc(message.whoToCall);
  }*/

  useEffect(() => {
    console.log(chats);
    console.log(messages);
  }, [messages]);

  return (
    <>
      <ToastContainer />
      <Home
        chats={chats}
        setChats={setChats}
        messages={messages}
        setMessages={setMessages}
        sendMessage={sendMessage}
      />
    </>
  );
}

export default App;
