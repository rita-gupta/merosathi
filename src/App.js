import "./App.css";
import { Form, Input, Button } from "reactstrap";
import { useState, useEffect } from "react";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data(),
        }))
      );
    });
  }, []);

  console.log(messages);

  return (
    <div className='app'>
      <div className='app__chatRoom'>
        {messages.map(({ message, id }) => (
          <Message key={id} message={message} />
        ))}
        <Message />
      </div>
      <Form className='app__form'>
        <Input
          className='app__input'
          placeholder='Enter a message'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button className='app__sendButton' type='submit' color='primary'>
          Send
        </Button>
      </Form>
    </div>
  );
}

export default App;
