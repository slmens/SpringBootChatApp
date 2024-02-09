import React from "react";
import "./IncomingMessage.css";

function IncomingMessage(message) {
  return <div id="incomingMessage">{message.message}</div>;
}

export default IncomingMessage;
