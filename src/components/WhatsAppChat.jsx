import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppChat() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const bubbleRef = useRef(null);

  const messages = [
    "👋 Hi! Chat with Dr. Light",
    "💬 Need help with your eyes?",
    "🕒 Limited time offer! Ask us",
    "👁️ Free screening available",
  ];

  // Auto-show bubble after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-dismiss after 8 seconds
  useEffect(() => {
    if (showTooltip && isVisible) {
      const dismissTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 8000);
      return () => clearTimeout(dismissTimer);
    }
  }, [showTooltip, isVisible]);

  // Rotate messages every 3 seconds
  useEffect(() => {
    if (showTooltip && isVisible) {
      const messageTimer = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 3000);
      return () => clearInterval(messageTimer);
    }
  }, [showTooltip, isVisible, messages.length]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWhatsAppClick = () => {
    setShowTooltip(false);
    // Optional: Track click analytics here
  };

  const handleCloseTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Enhanced Speech Bubble with Tail */}
      {showTooltip && (
        <div
          ref={bubbleRef}
          className="mb-3 bg-white text-gray-800 text-sm px-4 py-3 rounded-2xl shadow-lg flex items-center space-x-2 relative animate-fade-in-up"
          onMouseEnter={() => setShowTooltip(true)}
        >
          {/* Close button */}
          <button
            onClick={handleCloseTooltip}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs transition-colors"
          >
            <FaTimes />
          </button>

          {/* Message with typing indicator */}
          <div className="flex flex-col">
            <span className="font-medium">{messages[currentMessage]}</span>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-xs text-green-500">● Online</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">Reply in 2 mins</span>
            </div>
          </div>

          {/* Enhanced typing dots */}
          <div className="flex space-x-1 ml-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-typing-bounce"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-typing-bounce delay-150"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-typing-bounce delay-300"></span>
          </div>

          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}

      {/* Enhanced WhatsApp Button with multiple animations */}
      <a
        href="https://wa.me/233240553897"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 animate-float hover:scale-110 group"
        title="Chat with Dr. Light on WhatsApp"
      >
        {/* Softer + Smaller Pulse */}
        <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-400 opacity-40 animate-ping-slow"></span>

        {/* Glow effect on hover */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity duration-300"></span>

        <FaWhatsapp size={24} className="relative z-10" />
      </a>

      {/* Add these CSS animations to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes typingBounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
        }
        @keyframes pingSlow {
          75%,
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-typing-bounce {
          animation: typingBounce 1.4s ease-in-out infinite both;
        }
        .animate-ping-slow {
          animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
