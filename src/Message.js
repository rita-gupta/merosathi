import React from "react";
import "./message.css";

function Message(props) {
  const { id, message } = props;

  return (
    <div className='message__container' key={id}>
      <p className='message'>{message.message}</p>
    </div>
  );
}

export default Message;
