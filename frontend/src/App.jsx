import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const isConnected = useRef(false);
  let stompClient = null;
  //const userId = "asd";

  const notifyFunc = (message) => {
    console.log(message);
    toast("Deleting All Messages!");
  };

  // WEBSOCKET FUNCTIONS
  function connect() {
    if (isConnected.current) {
      console.log("Already connected. Skipping connection attempt.");
      return;
    }

    //const userIdd = localStorage.getItem("id");
    //const formattedUserId = userIdd.replace(/^"(.*)"$/, "$1");

    const socket = new SockJS("http://localhost:8080/chatRoom");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      console.log("Connected: " + frame);
      const userId = Math.random() * 1000;
      isConnected.current = true;

      stompClient.subscribe(`/topic/globalNotifications`, function (message) {
        handleReceivedGlobalMessages(JSON.parse(message.body));
      });

      stompClient.subscribe(
        `/user/${userId}/queue/privateNotifications`,
        function (message) {
          handleComingPrivateMessages(JSON.parse(message.body));
        }
      );
    });
  }

  function handleComingPrivateMessages(message) {
    if (isConnected.current) {
      console.log(message);
    }
  }

  function handleReceivedGlobalMessages(message) {
    notifyFunc(message);
  }

  /*function handleReceivedNotification(message) {
    notifyFunc(message.whoToCall);
  }*/

  if (!isConnected.current) {
    connect();
  }

  return (
    <>
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;
