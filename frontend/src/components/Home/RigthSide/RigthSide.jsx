/* eslint-disable react/prop-types */
import React from "react";
import "./RigthSide.css";
import IncomingMessage from "../../reusableComponents/IncomingMessage/IncomingMessage";
import SentMessage from "../../reusableComponents/SentMessage/SentMessage";

function RigthSide({ currentMessages }) {
  console.log(currentMessages);

  return (
    <div id="rightSide">
      <div id="incomingMessagesContainer">
        {currentMessages &&
          currentMessages.incomingMessages &&
          currentMessages.incomingMessages.map((message, index) => (
            <IncomingMessage key={index} message={message} />
          ))}
      </div>

      <div id="sentMessagesContainer">
        {currentMessages &&
          currentMessages.sentMessages &&
          currentMessages.sentMessages.map((message, index) => (
            <SentMessage key={index} message={message} />
          ))}
      </div>
    </div>
  );
}

export default RigthSide;
