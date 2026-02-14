
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-4xl font-bold text-orange-600 mb-6 tracking-tighter">온나공</h3>
          <p className="text-xl text-gray-600 font-light mb-10 max-w-2xl">
            "당신의 무너진 일상을 다시 세우는 멘탈 엔지니어 김범중이<br/>
            끝까지 함께하겠습니다."
          </p>
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
            <a 
              href="http://pf.kakao.com/_maxgWC/chat" 
              className="flex-1 bg-orange-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-600 transition-all transform hover:-translate-y-1"
            >
              불안 극복을 위한 상담 문의하기
            </a>
            <a 
              href="https://open.kakao.com/o/gLkzMYtf" 
              className="flex-1 bg-amber-100 text-amber-800 px-8 py-5 rounded-2xl font-bold text-lg shadow-md hover:bg-amber-200 transition-all transform hover:-translate-y-1"
            >
              마음챙김 프로그램 참여
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-gray-50">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">운영 시간</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>평일 및 토요일: 오전 10:00 ~ 오후 9:00</li>
              <li className="text-red-500 font-bold">매주 일요일 휴무</li>
              <li>상담은 100% 예약제로 운영됩니다.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">전문성 인증</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>SBS 스페셜 '공황장애 편' 자문/소개</li>
              <li>인지행동상담 / 심리상담 1급</li>
              <li>메타인지지도사 1급</li>
              <li>저서 &lt;괜찮아, 공황이야&gt; 작가</li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-bold text-gray-900 mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                <span className="font-bold text-xs uppercase tracking-tighter">Blog</span>
              </a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-red-500 hover:text-white transition-all">
                <span className="font-bold text-xs uppercase tracking-tighter">Youtube</span>
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-400">Copyright © 2024 온나공. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
