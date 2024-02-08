/* eslint-disable react/prop-types */
import React from "react";
import "./Chat.css";

function Chat(props) {
  return <div id="chatContainer">{props.userId}</div>;
}

export default Chat;
