import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3000");
socket.emit("join", {"username": socket.id, "room": "testroom"});

function ChatTester() {

    const [messages, setMessages] = useState(["Start of chat"]);
    const [message, setMessage] = useState("");
    const [target, setTarget] = useState("");

    useEffect(() => {
        socket.once("private_response", (data) => {
            setMessages([...messages, data]);
        });
    });

    const sendMessage = () => {
        if (message != "") {
            // emit a message to server when message isn't empty
            socket.emit("private_message",
                {
                    "message": message,
                    "target": target
                }
            );
        }
    }

    return (
        <div>
            <div>
                <p>Your id is {socket.id}</p>
            </div>
            <input name="target" onChange={(e) => setTarget(e.target.value)}/>
            <input name="message" onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={() => sendMessage()}>Send</button>
            <div>
                {messages.map(msg => (
                    <div>
                        <p>{msg}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatTester;
