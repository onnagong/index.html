
import React from 'react';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">주요 이력 및 저서</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">TV</span>
                <div>
                  <h4 className="font-bold text-gray-800">SBS 스페셜 출연</h4>
                  <p className="text-sm text-gray-500 italic">공황장애 극복 및 멘탈 관리 전문가로 소개</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">BOOK</span>
                <div>
                  <h4 className="font-bold text-gray-800">도서 &lt;괜찮아, 공황이야&gt; 저자</h4>
                  <p className="text-sm text-gray-500 italic">자전적 경험과 극복 노하우를 담은 베스트셀러</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">EXP</span>
                <div>
                  <h4 className="font-bold text-gray-800">10년 이상, 1만 회기 이상의 상담 기록</h4>
                  <p className="text-sm text-gray-500 italic">누적 내담자 수천 명의 일상 복귀 설계</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">보유 자격 사항</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs text-orange-500 font-bold mb-1 uppercase tracking-tighter">Certified</p>
                <p className="font-bold text-gray-800">인지행동상담 1급</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs text-orange-500 font-bold mb-1 uppercase tracking-tighter">Certified</p>
                <p className="font-bold text-gray-800">심리상담 1급</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs text-orange-500 font-bold mb-1 uppercase tracking-tighter">Certified</p>
                <p className="font-bold text-gray-800">메타인지지도사 1급</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs text-orange-500 font-bold mb-1 uppercase tracking-tighter">Certified</p>
                <p className="font-bold text-gray-800">생활체육지도자 2급</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
