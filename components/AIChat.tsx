import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { CONTEXT_FOR_AI } from '../constants';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon, PaperAirplaneIcon, SparklesIcon } from './icons/Icons';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  // Initialize the chat on first open
  useEffect(() => {
    if (isOpen && !chatRef.current) {
        try {
            if (!process.env.API_KEY) {
                console.error("API_KEY environment variable not set.");
                setError("Configuration error: API Key is missing.");
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: CONTEXT_FOR_AI,
                },
            });
            chatRef.current = newChat;
            setMessages([
                { role: 'model', text: "Hi there! I'm Andani's AI assistant. Feel free to ask me about his skills, projects, or experience." }
            ]);
        } catch (e) {
            console.error("Failed to initialize AI Chat:", e);
            setError("Sorry, the AI assistant is currently unavailable.");
        }
    }
  }, [isOpen]);
  
  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: input });

      let currentModelMessage = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        currentModelMessage += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: currentModelMessage };
            return newMessages;
        });
      }
    } catch (e) {
      console.error("Error sending message to AI:", e);
      setError("Oops! Something went wrong. Please try again.");
      // remove the empty model message placeholder
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Chat"
          className="bg-gradient-to-r from-accent to-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
        >
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <ChatBubbleLeftEllipsisIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-surface/80 backdrop-blur-xl border border-slate-100/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up"
          style={{ opacity: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-accent"/>
              <h3 className="font-bold text-lg text-text-primary">AI Career Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-lg'
                      : 'bg-background/80 text-text-primary rounded-bl-lg'
                    }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl bg-background/80 text-text-primary rounded-bl-lg">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-accent rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-accent rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-accent rounded-full animate-pulse"></span>
                      </div>
                  </div>
              </div>
            )}
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100/10 flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? "Thinking..." : "Ask about Andani..."}
                disabled={isLoading || !!error}
                className="w-full bg-background/70 border border-slate-100/10 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition text-sm text-text-primary"
                aria-label="Chat input"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || !!error}
                className="bg-primary p-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-focus transition-colors"
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="h-5 w-5"/>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
