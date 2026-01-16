import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Paperclip } from 'lucide-react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! I am Sarah from ClearPath. How can I help you with your credit today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent reply
    setTimeout(() => {
      const replies = [
        "I can definitely help with that. Could you tell me a bit more about your situation?",
        "That sounds frustrating. Let's see what we can do to fix it.",
        "Great question. Our team specializes in exactly that.",
        "Could you provide your email so a senior specialist can follow up?",
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomReply,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-primary/50 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-primary hover:bg-primaryDark'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] max-w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-dark p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border-2 border-slate-600">
                    <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-dark rounded-full"></div>
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">Sarah Jenkins</h3>
                    <p className="text-blue-200 text-xs">Credit Specialist • Online</p>
                </div>
            </div>
            <button onClick={onToggle} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 bg-white flex items-center gap-2">
           <button type="button" className="p-2 text-slate-400 hover:text-primary transition-colors">
              <Paperclip className="w-5 h-5" />
           </button>
           <input 
             type="text" 
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder="Type a message..."
             className="flex-1 bg-slate-50 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-slate-700 placeholder:text-slate-400"
           />
           <button 
             type="submit" 
             disabled={!inputValue.trim()}
             className="p-2 bg-primary text-white rounded-full hover:bg-primaryDark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
           >
              <Send className="w-4 h-4" />
           </button>
        </form>
        
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-[10px] text-slate-400">Powered by ClearPath Support</p>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;