import { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import "./App.css";
import WebSocketService from "../src/util/WebSocketService";

function App() {
  const isConnected = useRef(false);
  const userId = Math.random() * 1000;
  console.log("user id : " + userId);
  //const userId = "asd";

  useEffect(() => {
    WebSocketService.initializeWebSocket(
      handleComingPrivateMessages,
      handleReceivedGlobalMessages,
      userId
    );
    isConnected.current = true;
    /*return () => {
        WebSocketService.closeWebSocket();
    };*/
  }, []);

  const notifyFunc = (message) => {
    console.log(message);
    toast("Deleting All Messages!");
  };

  const sendMessage = (message) => {
    WebSocketService.sendMessage(userId, message);
  };

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

  return (
    <>
      <ToastContainer />
      <Home sendMessage={sendMessage} />
    </>
  );
}

export default App;
