import React, { useState } from 'react';
import Navbarboot from '../../components/navbar/navbarboot';
import './chat.css';

const Sidebar = ({ people, setActivePerson }) => {
  return (
    <div className="sidebar">
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} onClick={() => setActivePerson(person)}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [activePerson, setActivePerson] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && activePerson) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const message = {
        text: newMessage,
        time,
        sentByMe: true,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newMessage.trim() !== '' && activePerson) {
      handleSendMessage();
    }
  };

  return (
    <>
      <Navbarboot />
      <div className="chat-container">
        <Sidebar
          people={[
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' },
            { id: 4, name: 'David' },
            { id: 5, name: 'Emily' },
            { id: 6, name: 'Frank' },
            { id: 7, name: 'Grace' },
            { id: 8, name: 'Henry' },
            // Add more people here with random names
          ]}
          setActivePerson={setActivePerson}
        />
        <div className="main-chat">
          <div className="chat">
            {activePerson ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sentByMe ? 'sent' : 'received'}`}
                >
                  <div className="message">{msg.text}</div>
                  <div className="time">{msg.time}</div>
                </div>
              ))
            ) : (
              <div className="select-person">Select a person to start chatting</div>
            )}
          </div>
          {activePerson && (
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
