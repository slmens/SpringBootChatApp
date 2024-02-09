/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Home.css";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RigthSide from "./RigthSide/RigthSide.jsx";

function Home({ sendMessage }) {
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState({});

  const pseudo = [
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    {
      text: "adfdfadfdasfsdfsdfdafsdfdfadsfdsafdsafsdfsdfdasfdsfadsfadsfdsfasfddfadsfdsfasdffasfsdfdsafs",
      type: "incoming",
    },
    { text: "adsfad", type: "sent" },
    // Add more messages as needed
  ];

  return (
    <div id="homeContainer">
      <LeftSide setMessages={setMessages} setCurrentChat={setCurrentChat} />
      <RigthSide currentMessages={pseudo} sendMessage={sendMessage} />
    </div>
  );
}

export default Home;
