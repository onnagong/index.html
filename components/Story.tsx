
import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">My Sincere Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900 leading-tight">
            별명이 '곰'이던 덩치 큰 사람이,<br/>불안 앞에 53kg까지 무너져내렸던 날들
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-16 text-lg leading-relaxed text-gray-700">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">[ 아픔의 깊이 ]</h3>
            <p>
              한때는 '곰'이라 불릴 만큼 건장한 체격과 강한 정신력을 자부하던 평범한 청년이었습니다. 하지만 예고 없이 찾아온 <span className="text-orange-600 font-bold underline decoration-orange-200">공황장애, 범불안장애, 그리고 우울증</span>은 순식간에 제 일상을 집어삼켰습니다. 
            </p>
            <p>
              숨이 쉬어지지 않는 공포 속에 체중은 53kg까지 곤두박질쳤고, 제 세상은 단 칸 방보다 좁아졌습니다. 유명하다는 대학병원과 상담 센터를 수없이 전전하며 매달렸지만, 돌아오는 것은 "시간이 약이다"라는 막연한 대답뿐이었고 제 절망은 더욱 깊어만 갔습니다.
            </p>
          </div>

          {/* Abstract Illustration 1: Pure Nature - Hopeful Sunset Horizon */}
          <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg bg-orange-50">
            <img 
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop" 
              alt="Hopeful sunset horizon" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">[ 스스로 찾은 빛 ]</h3>
            <p>
              벼랑 끝에 선 심정으로 결심했습니다. <span className="italic font-medium">"이대로는 안 되겠다, 내가 나를 살려야 한다."</span> 그 절박함 끝에 운명처럼 '인지행동치료(CBT)'를 만났습니다. 
            </p>
            <p>
              단순한 위로가 아닌, 내 뇌가 왜 이렇게 반응하는지 원리를 파악하자 비로소 희망이 보였습니다. 두려움에 직면하는 고통스러운 훈련을 하루도 빠짐없이 반복했고, 서서히 저 자신을 있는 그대로 수용하는 법과 마음챙김을 삶의 근간으로 삼게 되었습니다.
            </p>
          </div>

          {/* Abstract Illustration 2: Pure Nature - Tranquil Lake and Mountains */}
          <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg bg-orange-50">
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
              alt="Tranquil lake and mountains at dawn" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">[ 치열한 연구와 완치 ]</h3>
            <p>
              수년 동안 심리학과 뇌과학 논문 수천 장을 파고들었습니다. 단순히 읽는 것에 그치지 않고, 모든 지식을 제 극복 과정에 데이터화하여 하나하나 대입하고 실험했습니다. 
            </p>
            <p>
              그 지독하리만큼 치열했던 설계와 교정 과정 끝에, 저는 마침내 장기간 복용하던 <span className="text-gray-900 font-bold">정신과 약을 완전히 끊고 완치</span>의 길로 들어설 수 있었습니다. 고장 났던 제 일상의 회로가 다시 정상적으로 작동하기 시작한 것입니다.
            </p>
          </div>

          <div className="bg-orange-50 p-8 md:p-12 rounded-3xl border border-orange-100 italic">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 not-italic">[ 전문가로의 소명 ]</h3>
            <p className="mb-6">
              "내가 겪은 이 지옥 같은 시간을 누군가는 단축할 수 있게 돕자."
            </p>
            <p className="not-italic">
              이 결심이 저를 전문가의 길로 이끌었습니다. 지난 10년이 넘는 시간 동안 1만 회기 이상의 상담을 진행하며, 저는 수많은 분이 불안을 넘어 다시 일상의 평온을 되찾는 기적을 목격해왔습니다. 당신의 아픔이 얼마나 깊든, 제가 설계한 길을 따라온다면 반드시 끝이 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
