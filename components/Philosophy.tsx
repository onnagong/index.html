
import React from 'react';

const Philosophy: React.FC = () => {
  const features = [
    {
      title: "뇌과학 기반 '불안 설계'",
      desc: "막연한 심리 분석이 아닌, 편도체와 전두엽의 메커니즘을 이해하고 불안의 알고리즘을 재설계합니다.",
      icon: "🧠"
    },
    {
      title: "정밀한 '멘탈 엔지니어링'",
      desc: "내담자의 현재 상태를 정밀 진단하고, 무너진 인지 체계를 보수하여 스스로 일어서는 힘을 길러드립니다.",
      icon: "⚙️"
    },
    {
      title: "구체적인 '일상 루틴 기획'",
      desc: "회복의 시작은 행동입니다. 매일 실천 가능한 맞춤형 루틴을 기획하여 뇌가 안전함을 학습하도록 돕습니다.",
      icon: "📅"
    },
    {
      title: "실전형 '직면 훈련'",
      desc: "회피는 불안을 키웁니다. 안전한 환경에서 서서히 두려움에 직면하며 자신감을 회복하는 실질적인 훈련을 제공합니다.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-orange-600">Why On-na-gong?</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">막연한 위로가 아닌, 실질적인 설계</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            마음의 문제는 보이지 않는 기계의 오작동과 같습니다. 우리는 그 구조를 파악하고, 수리하며, 더 원활하게 작동하도록 설계합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-10 rounded-3xl border border-gray-50 bg-gray-50/50 hover:bg-orange-50/50 transition-all group">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 underline decoration-orange-300 decoration-4 underline-offset-4">{f.title}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
