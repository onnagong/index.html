
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-600 tracking-tighter">온나공</span>
          <span className="hidden sm:inline-block text-xs text-gray-400 border-l border-gray-300 pl-2">온전히 나를 사랑하는 공간</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#profile" className="hover:text-orange-500 transition-colors">프로필</a>
          <a href="#story" className="hover:text-orange-500 transition-colors">나의 스토리</a>
          <a href="#philosophy" className="hover:text-orange-500 transition-colors">설계 철학</a>
          <a href="#credentials" className="hover:text-orange-500 transition-colors">이력 사항</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="http://pf.kakao.com/_maxgWC/chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            상담 문의
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
