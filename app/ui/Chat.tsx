"use client";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatProps {
  setShowChat: (show: boolean) => void; // Prop to close chat window
}

const Chat: React.FC<ChatProps> = ({ setShowChat }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const initialBotMessage: Message = {
      sender: "bot",
      text: "Hi! How can I help you today?",
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleClose = () => {
    setShowChat(false); // Hide the chat when close button is clicked
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;
    setInput("");

    // Add the user's message to the messages array
    const newMessage: Message = { sender: "user", text: userInput };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }), // send user input to the backend
      });

      const data = await response.json(); // Receive AI response from backend
      const botResponse: Message = { sender: "bot", text: data.response };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // Function to handle pressing the Enter key
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission
      await handleSendMessage(); // Call the send message function
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-2 md:m-4 max-w-[95%] md:max-w-md w-full bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center bg-[#2cd5c4] text-white text-lg p-3 rounded-t-lg pl-6">
        <span>Chat with us</span>
        <button className="text-white" onClick={handleClose}>
          <FaTimes className="bg-[#2cd5c4]" />
        </button>
      </div>
      <div className="h-[77dvh] md:h-[50vh] overflow-y-auto p-4 bg-gray-50 rounded-b-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#2cd5c4] text-white"
                  : "text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-3 bg-gray-200 rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 text-lg pl-2 py-2 border focus:outline-none focus:ring-2 focus:ring-[#2cd5c4] rounded-l-lg"
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={handleSendMessage}
          className="p-3.5 bg-[#2cd5c4] text-white rounded-r-lg"
        >
          <FaPaperPlane className="text-white bg-[#2cd5c4]" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
