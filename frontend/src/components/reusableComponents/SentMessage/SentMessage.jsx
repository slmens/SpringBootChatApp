import React from "react";
import "./SentMessage.css";

function SentMessage(message) {
  return <div id="sentMessage">{message.message}</div>;
}

export default SentMessage;
