/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Home.css";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RigthSide from "./RigthSide/RigthSide.jsx";

function Home() {
  const [currentChat, setCurrentChat] = useState();

  const [messages, setMessages] = useState({});

  const pseudo = {
    incomingMessages: [
      "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      "adf",
      "adf",
      "adf",
      "adf",
      "adf",
      "adf",
    ],
    sentMessages: ["adsfad", "adf", "adf", "adf", "adf", "adf", "adf"],
  };

  return (
    <div id="homeContainer">
      <LeftSide setMessages={setMessages} setCurrentChat={setCurrentChat} />
      <RigthSide currentMessages={pseudo} />
    </div>
  );
}

export default Home;
