
import React, { useState, useEffect } from 'react';

const TigerBot: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "제가 곁에서 응원하겠습니다.",
    "포기하지 마세요, 당신은 충분히 강합니다.",
    "불안은 그저 지나가는 구름일 뿐이에요.",
    "오늘 하루도 고생 많으셨어요.",
    "한 걸음씩, 천천히 가면 됩니다."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div className="bg-white border border-orange-100 shadow-xl p-3 rounded-2xl mb-2 max-w-[200px] relative animate-bounce-slow">
        <p className="text-xs md:text-sm font-medium text-gray-700 leading-tight">
          {messages[messageIndex]}
        </p>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-orange-100 rotate-45"></div>
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden transform hover:scale-110 transition-transform cursor-pointer">
        <span className="text-4xl">🐯</span>
      </div>
      <p className="text-[10px] font-bold text-orange-600 mt-1 bg-white/80 px-2 py-0.5 rounded-full">불안잡는 CBT호랑이</p>
    </div>
  );
};

export default TigerBot;
