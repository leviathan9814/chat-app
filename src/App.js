import React from "react";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import Modal from "./components/LoginForm";

import './App.css';

const projectID = "cfba254d-5a0e-492d-a0b4-57974d510e2f";

const App = () => {

  if (!localStorage.getItem("username")) return <Modal/>;

  return (
  <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem("username")}
    userSecret={localStorage.getItem("password")}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />    
  );
}

export default App;
