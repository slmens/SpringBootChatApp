/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Home.css";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RigthSide from "./RigthSide/RigthSide.jsx";

function Home({ sendMessage, messages, setMessages, chats, setChats }) {
  const [currentChat, setCurrentChat] = useState();

  return (
    <div id="homeContainer">
      <LeftSide
        chats={chats}
        setChats={setChats}
        setMessages={setMessages}
        setCurrentChat={setCurrentChat}
      />
      <RigthSide
        currentChat={currentChat}
        currentMessages={messages[currentChat]}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Home;
