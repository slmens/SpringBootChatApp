/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import Chat from "../../reusableComponents/Chat/Chat.jsx";
import "./LeftSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function LeftSide() {
  const [chats, setChats] = useState([]);
  const chatCount = useRef(0);

  function handleNewChat() {
    // New chate basıldığı zaman bir id alsın senden bir popup ile o id ile bir chat componenti oluştursun o idyi ona versin karşı tarafın private messagelara kaydolduğu id bu
    // Bize mesaj gelince de eğer o kişi chat componentlerimizde yoksa yeni bir chat component oluştursun karşı tarafın idsini versin komponente ve mesajını
    // gelen mesaj komponentini çağırarak yazsın
    // karşı tarafın idsini al userdan ve o idyi fonksiyona ver
    const userId = prompt(
      "Please enter the user id that you want to message!",
      "12312453"
    );

    if (userId !== null) {
      if (!chats.includes(userId)) {
        if (chatCount.current === 0) {
          setChats([userId]);
        } else {
          setChats((prev) => [...prev, userId]);
        }
      }

      chatCount.current = chatCount.current + 1;
      console.log(chats);
    }
  }

  const chatsToRender = chats.map((chat) => {
    return <Chat key={chat} userId={chat} />;
  });

  console.log(chatsToRender);

  return (
    <div id="leftSide">
      <div id="leftSideHeader">
        <h1>Chat App</h1>
        <div onClick={handleNewChat}>
          <FontAwesomeIcon id="plusIcon" icon={faPlus} />
          <h3>New Chat</h3>
        </div>
      </div>
      <div id="leftSideChats">{chatsToRender}</div>
    </div>
  );
}

export default LeftSide;
