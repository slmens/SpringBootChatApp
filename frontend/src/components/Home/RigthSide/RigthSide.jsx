/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./RigthSide.css";
import IncomingMessage from "../../reusableComponents/IncomingMessage/IncomingMessage";
import SentMessage from "../../reusableComponents/SentMessage/SentMessage";

function RigthSide({ currentMessages, sendMessage, currentChat }) {
  const [messageToSend, setMessageToSend] = useState("");

  function handleOnChange(e) {
    setMessageToSend(e.target.value);
  }

  function handleClick() {
    sendMessage(messageToSend, currentChat);
    setMessageToSend("");
  }

  return (
    <div id="rightSide">
      <h1>Current Chat: {currentChat}</h1>
      <div id="messageContainer" className="scrollable-container">
        {currentMessages &&
          currentMessages.map((message, index) =>
            message.type === "incoming" ? (
              <IncomingMessage key={index} message={message.text} />
            ) : (
              <SentMessage key={index} message={message.text} />
            )
          )}
      </div>

      <div id="sendMessageContainer">
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="Your message"
          value={messageToSend}
        />
        <div onClick={handleClick} id="btnSend">
          Send
        </div>
      </div>
    </div>
  );
}

export default RigthSide;
