import React from "react";
import "./message.css";

function Message(props) {
  const { id, message, username } = props;

  const isUser = username === message?.username;

  return (
    <div
      className={`message__container ${isUser && "message__containerUser"}`}
      key={id}
    >
      <p className={isUser ? "message__user" : "message"}>{message?.message}</p>
    </div>
  );
}

export default Message;
