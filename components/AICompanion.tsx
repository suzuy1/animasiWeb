
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { RobotIcon, XMarkIcon, PaperAirplaneIcon } from './icons';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const AICompanion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatLogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chat) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: "You are a friendly and expert frontend engineer specializing in web animations. Your goal is to provide concise, helpful, and inspiring answers about web animation techniques, tools, and best practices. Keep your answers focused and to the point. Answer in Indonesian.",
                    },
                });
                setChat(newChat);
                 if (messages.length === 0) {
                    setMessages([{ role: 'model', text: 'Halo! Saya asisten AI Anda. Tanyakan apa saja tentang animasi web!' }]);
                }
            } catch (error) {
                console.error("Gemini API initialization failed:", error);
                setMessages([{ role: 'model', text: 'Maaf, saya tidak dapat terhubung ke layanan AI saat ini.' }]);
            }
        }
    }, [isOpen, chat, messages.length]);

    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || !chat || isLoading) return;

        const userMessage: Message = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const responseStream = await chat.sendMessageStream({ message: inputValue });
            
            let currentModelMessage = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of responseStream) {
                 currentModelMessage += chunk.text;
                 setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'model', text: currentModelMessage };
                    return newMessages;
                });
            }

        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: 'Maaf, terjadi kesalahan saat memproses permintaan Anda.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all duration-300 hover:scale-110 active:scale-100 animate-pulse cursor-interactive z-50"
                aria-label="Open AI Companion"
            >
                <RobotIcon className="w-7 h-7" />
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-6 left-6 md:bottom-24 md:left-6 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[600px] bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col transition-all duration-500 ease-in-out z-[60] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}>
                {/* Header */}
                <header className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h3 className="font-bold text-lg text-gray-100">Asisten Animasi AI</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white cursor-interactive">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </header>

                {/* Chat Log */}
                <div ref={chatLogRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                                <p className="text-sm">{msg.text}{msg.role === 'model' && isLoading && index === messages.length - 1 ? '...' : ''}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && messages[messages.length-1]?.role === 'user' && (
                         <div className="flex justify-start">
                             <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-700 text-gray-200">
                                 <div className="flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                 </div>
                             </div>
                         </div>
                    )}
                </div>

                {/* Input Form */}
                <footer className="p-4 border-t border-gray-700">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Tanya tentang animasi..."
                            className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-200 cursor-interactive"
                        >
                            <PaperAirplaneIcon className="w-5 h-5" />
                        </button>
                    </form>
                </footer>
            </div>
        </>
    );
};

export default AICompanion;