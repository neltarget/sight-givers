// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        "typing-bounce": "typingBounce 1.4s ease-in-out infinite both",
        "ping-slow": "pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        typingBounce: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-4px)" },
        },
        pingSlow: {
          "75%, 100%": {
            transform: "scale(1.8)",
            opacity: "0",
          },
        },
      },
    },
  },
};
