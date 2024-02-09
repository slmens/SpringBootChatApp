/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import Chat from "../../reusableComponents/Chat/Chat.jsx";
import "./LeftSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function LeftSide({ setCurrentChat, setMessages }) {
  const [chats, setChats] = useState([]);
  const chatCount = useRef(0);

  // messages'ı burda tutsam her bir idnin karşısında sent ve incoming messages olsa ve left side da bir chati değiştirdiğimde o chatin messages karşılığını home'a versem
  // home'da bunu rigth'a verse

  // yeni bir id eklenince home'da mesajları değiştir
  // right'da yeni bir mesaj gelince homedaki statei değiştir.

  function handleNewChat() {
    // New chate basıldığı zaman bir id alsın senden bir popup ile o id ile bir chat componenti oluştursun o idyi ona versin karşı tarafın private messagelara kaydolduğu id bu
    // Bize mesaj gelince de eğer o kişi chat componentlerimizde yoksa yeni bir chat component oluştursun karşı tarafın idsini versin komponente ve mesajını
    // gelen mesaj komponentini çağırarak yazsın
    // karşı tarafın idsini al userdan ve o idyi fonksiyona ver

    // new chate basınca karşı userın websockete abone olduğu adrese mesaj yolluyoruz
    // o da bize böyle yolluyor, mesaj gelince chatimiz yoksa eğer chat oluşturuyor.
    // gelen mesaj kadar üstünde bildirim gösteriyor, carda tıklayınca bildirimler gidiyor.

    // burda tıklanan chat yukarıda home'da choosenChati değiştirsin choosen chatte rigth side ı değiştirsin
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

        setMessages((prev) => ({
          ...prev,
          [userId]: {
            incomingMessages: [],
            sentMessages: [],
          },
        }));

        setCurrentChat(userId);
      }

      chatCount.current = chatCount.current + 1;
    }
  }

  const chatsToRender = chats.map((chat) => {
    return <Chat handleChatClick={handleChatClick} key={chat} userId={chat} />;
  });

  function handleChatClick(userId) {
    setCurrentChat(userId);
  }

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
