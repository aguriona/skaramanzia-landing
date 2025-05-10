import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Message = {
    sender: 'user' | 'bot' | 'typing';
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
            const userMessage = input; // Store message before clearing input
            
            // Clear input immediately
            setInput('');
            
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', text: userMessage },
            ]);

            // Mostrar indicador de escritura
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'typing', text: '' },
            ]);

            try {
                const response = await fetch(
                    'https://monkeylord.up.railway.app/webhook/678f1f57-e7a4-4eef-9dd4-13757e951425/chat',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            sessionId,
                            action: 'sendMessage',
                            chatInput: userMessage,
                        }),
                    }
                );

                const data = await response.json();

                // Quitar el indicador de escritura y agregar la respuesta del bot
                setMessages((prevMessages) => 
                    prevMessages
                        .filter(msg => msg.sender !== 'typing') // Eliminar el indicador de escritura
                        .concat({ sender: 'bot', text: data.output || 'No hay respuesta' })
                );
            } catch (error) {
                console.error('Error enviando el mensaje:', error);
                // En caso de error, también quitar el indicador de escritura
                setMessages((prevMessages) => 
                    prevMessages
                        .filter(msg => msg.sender !== 'typing')
                        .concat({ sender: 'bot', text: 'Lo siento, ocurrió un error al procesar tu mensaje.' })
                );
            }
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
                            msg.sender === 'typing' ? (
                                // Indicador de escritura animado
                                <div key={index} className="message bot typing-indicator">
                                    <span className="typing">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                </div>
                            ) : (
                                <div
                                    key={index}
                                    className={`message ${msg.sender}`}
                                >
                                    <span>
                                        {msg.sender === 'user' ? '👤' : '🤖'}{' '}
                                        {msg.text}
                                    </span>
                                </div>
                            )
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


