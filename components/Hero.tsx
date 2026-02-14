
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: Sunset mountain trail representing hope and overcoming hardship */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
          alt="Sunset Mountain Trail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-white text-6xl md:text-9xl font-bold mb-4 leading-tight drop-shadow-2xl animate-fade-in">
          온나공
        </h1>
        <p className="text-orange-200 text-lg md:text-2xl font-medium tracking-widest mb-8 opacity-90 drop-shadow-md">
          온전히 나를 사랑하는 공간
        </p>
        <div className="mb-10">
          <p className="text-white text-xl md:text-2xl font-light mb-2">멘탈 엔지니어 · 상담가 · 마음기획가 김범중(마집쌤)</p>
          <div className="h-px w-24 bg-orange-400 mx-auto mb-6"></div>
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg">
            "10년 넘게 1만 번의 마음을 설계하며 증명했습니다.<br className="hidden md:block"/>
            당신의 불안도 반드시 끝이 있습니다."
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="http://pf.kakao.com/_maxgWC/chat" 
            className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            상담 설계 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
