
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 flex-shrink-0 border-8 border-orange-50 bg-orange-50">
            <img 
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop" 
              alt="Warm Sunset Nature" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-grow">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full mb-4">
              IDENTITY
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">김범중(마집쌤)</h3>
            <p className="text-xl text-orange-500 font-medium mb-6">
              멘탈 엔지니어 · 상담가 · 마음기획가
            </p>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                "저는 단순히 마음을 위로하는 사람이 아닙니다. 고장 난 기계의 회로를 점검하듯, 불안이라는 시스템의 구조를 파악하고 일상을 다시 가동할 수 있도록 돕는 <span className="text-gray-900 font-bold">멘탈 엔지니어</span>입니다."
              </p>
              <p>
                10년이 넘는 기간 동안 1만 회 이상의 임상 경험을 통해, 수많은 내담자들이 막연한 불안에서 벗어나 구체적인 삶의 루틴을 회복하는 과정을 설계해왔습니다.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>불안 극복 설계 전문가</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>일상 루틴 기획 전문가</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>심리 행동 아키텍처</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
