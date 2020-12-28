import "./App.css";
import { Form, Input, Button } from "reactstrap";
import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    setUserName(prompt("Please enter your name."));
  }, []);

  const scrollTo = useRef();

  useEffect(() => {
    scrollTo.current.scrollIntoView({ block: "end" });
  }, [messages]);
  return (
    <div className='app'>
      <div className='app__chatRoom'>
        {messages.map(({ message, id }) => (
          <Message key={id} message={message} username={userName && userName} />
        ))}
      </div>
      <Form className='app__form'>
        <Input
          className='app__input'
          placeholder='Enter a message'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          className='app__sendButton'
          type='submit'
          color='primary'
          disabled={input === "" ? true : false}
          onClick={sendMessage}
        >
          Send
        </Button>
      </Form>
      <span ref={scrollTo}></span>
    </div>
  );
}

export default App;
