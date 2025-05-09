import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [sessionId, setSessionId] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false); // Controla si el chatbot está abierto o cerrado
    
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
          sendMessage();
        }
      };
    // Generar un sessionId al cargar el componente
    useEffect(() => {
        const storedSessionId = localStorage.getItem('sessionId');
        if (storedSessionId) {
            setSessionId(storedSessionId);
        } else {
            const newSessionId = uuidv4();
            localStorage.setItem('sessionId', newSessionId);
            setSessionId(newSessionId);
        }
    }, []);

    const sendMessage = async () => {
        if (input.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', text: input },
            ]);

            try {
                const response = await fetch(
                    'https://monkeylord.up.railway.app/webhook/97e06ab4-de40-4416-805f-ddcbb45ff4b1/chat',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            sessionId,
                            action: 'sendMessage',
                            chatInput: input,
                        }),
                    }
                );

                const data = await response.json();

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: data.output || 'No hay respuesta' },
                ]);
            } catch (error) {
                console.error('Error enviando el mensaje:', error);
            }
            setInput('');
        }
    };

    return (
        <div className="chatbot-container">
            {/* Botón flotante para abrir/cerrar el chatbot */}
            <div
                className="chatbot-toggle"
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                {isOpen ? '✖' : '💬'}
            </div>

            {/* Ventana del chatbot */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">🤖 Eva Bot</div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender}`}
                            >
                                <span>
                                    {msg.sender === 'user' ? '👤' : '🤖'}{' '}
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe tu mensaje..."
                        />
                        <button onClick={sendMessage}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;


