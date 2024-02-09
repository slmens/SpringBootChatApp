/* eslint-disable react/prop-types */
import "./Chat.css";

function Chat(props) {
  return (
    <div onClick={() => props.handleChatClick(props.userId)} id="chatContainer">
      {props.userId}
    </div>
  );
}

export default Chat;
