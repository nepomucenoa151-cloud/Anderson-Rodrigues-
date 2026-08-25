import React from "react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Escolha a aula",
      desc: "Abra o plano que faz sentido para o objetivo do seu treino."
    },
    {
      number: "2",
      title: "Adapte para a turma",
      desc: "Ajuste o ritmo e as atividades de acordo com a idade dos alunos."
    },
    {
      number: "3",
      title: "Aplique no tatame",
      desc: "Siga o passo a passo e conduza uma aula mais organizada."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#0B409C] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top pill badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#0066FF] text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-md">
            COMO FUNCIONA
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight [text-wrap:balance]">
            Planeje menos. <span className="text-[#FFD200]">Aplique mais.</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium">
            Em poucos minutos você encontra a aula certa e entra no tatame com um plano claro.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#124FB7]/80 hover:bg-[#124FB7] border border-[#2B6BD9]/60 rounded-3xl p-7 sm:p-8 transition-all duration-300 shadow-lg flex flex-col justify-start"
            >
              {/* Yellow Number Circle */}
              <div className="w-11 h-11 rounded-full bg-[#FFB800] text-slate-950 font-black text-lg flex items-center justify-center mb-6 shadow-sm">
                {item.number}
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

