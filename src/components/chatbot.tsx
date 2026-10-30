"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function BookEaseChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Namaste! 🙏 Welcome to BookEase. I am your AI booking assistant. How can I help you schedule an appointment today?",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "I can help you with that! You can click 'Book Appointment' above to choose from our salon, medical, tutoring, or fitness services.";

      if (query.includes("price") || query.includes("cost") || query.includes("fee")) {
        botReply = "Our services range from ₹599 for Haircut & Styling up to ₹1,999 for Business Strategy Consultation. All payments are securely processed via Razorpay or payable at venue!";
      } else if (query.includes("salon") || query.includes("hair")) {
        botReply = "Our Salon & Spa services include professional Haircut & Styling (₹599, 45 mins). Would you like to book a slot for today?";
      } else if (query.includes("doctor") || query.includes("health") || query.includes("medical")) {
        botReply = "General Health Consultations with experienced physicians are available for ₹999 (30 mins).";
      } else if (query.includes("contact") || query.includes("phone") || query.includes("support")) {
        botReply = "You can reach our support team at support@bookease.in or call us at +91 98765 43210.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-4 rounded-full shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 font-semibold group"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <span>Chat with AI Assistant</span>
          <Sparkles className="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform" />
        </button>
      ) : (
        <div className="w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  BookEase AI Assistant <Sparkles size={14} className="text-yellow-300" />
                </h3>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span> Online & ready
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-violet-100 text-violet-700 border border-violet-200"
                  }`}
                >
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div>
                  <div
                    className={`p-3.5 rounded-2xl text-sm shadow-sm ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1 block">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 text-xs italic">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                  <Bot size={14} className="text-violet-600 animate-bounce" />
                </div>
                <span>BookEase AI is typing...</span>
              </div>
            )}
          </div>

          {/* Input form */}
          <form onSubmit={handleSend} className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about services, prices, booking..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl transition-colors shadow-md hover:shadow-indigo-500/20"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
