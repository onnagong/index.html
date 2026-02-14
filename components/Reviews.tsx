
import React from 'react';

const Reviews: React.FC = () => {
  const cases = [
    {
      type: "공황장애",
      title: "숨조차 쉬기 힘들던 폐쇄공포 극복",
      content: "지하철도 못 타던 제가 마집쌤의 루틴 설계 3개월 만에 혼자 여행을 다녀왔습니다. 막연한 위로가 아니라 뇌과학적 원리를 설명해주시니 신뢰가 갔습니다.",
      tag: "루틴 설계"
    },
    {
      type: "강박증",
      title: "반복되던 확인 강박의 굴레를 벗다",
      content: "외출 전 1시간씩 확인하던 강박이 5분으로 줄었습니다. 멘탈 기획을 통해 제 사고 시스템을 재배치한 것이 신의 한 수였습니다.",
      tag: "멘탈 기획"
    },
    {
      type: "범불안장애",
      title: "24시간 지속되던 긴장의 완화",
      content: "늘 최악의 시나리오를 그리던 습관이 사라졌습니다. 실전형 직면 훈련을 통해 불안을 다루는 법을 배운 이후로 삶의 질이 달라졌습니다.",
      tag: "직면 훈련"
    },
    {
      type: "유기불안",
      title: "혼자 있는 시간에 대한 평온함",
      content: "누군가 떠날까 봐 늘 초조했던 제가 이제는 온전히 저 자신과 마주합니다. '온나공'이라는 이름처럼 온전한 나를 만났습니다.",
      tag: "마음챙김"
    }
  ];

  return (
    <section className="py-24 bg-orange-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">광고 하나 없는,<br className="sm:hidden"/> 내담자들이 직접 써내려간 기록</h2>
          <p className="text-gray-500 italic text-lg">"설계를 통해 변화된 실제 삶의 이야기들"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">{c.type}</span>
                <span className="text-gray-400 font-medium text-sm"># {c.tag}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">"{c.title}"</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                {c.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
