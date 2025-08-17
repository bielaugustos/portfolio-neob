
"use client";
import { useState, useEffect } from "react";

const messages = [
  'console.log("Bem-vindo ao meu portfólio 🚀")',
  'console.log("Explorando ideias com código 💻")',
  'console.log("Criando projetos open-source 🌍")',
];

export default function TerminalEffect() {
  const [displayText, setDisplayText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setCharIndex(0);
        setDisplayText("");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, messageIndex]);

  return (
    <div className="font-mono text-amber-500 bg-black p-3 rounded-md min-h-[40px] mt-30 mb-30">
  {displayText}
  <span className="animate-pulse">|</span>
</div>


  );
}