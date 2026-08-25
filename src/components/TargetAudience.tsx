import React from "react";
import { GraduationCap, Users, Sparkles, CheckCircle2 } from "lucide-react";

export function TargetAudience() {
  const audiences = [
    {
      title: "Professores e senseis",
      desc: "Que querem aulas mais dinâmicas, claras e fáceis de conduzir.",
      icon: GraduationCap
    },
    {
      title: "Academias e dojos",
      desc: "Que precisam de uma metodologia consistente para as turmas infantis.",
      icon: Users
    },
    {
      title: "Instrutores iniciantes",
      desc: "Que desejam segurança para organizar cada etapa da aula.",
      icon: Sparkles
    },
    {
      title: "Educadores físicos",
      desc: "Que buscam atividades lúdicas adaptáveis ao Karatê infantil.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Top pill badge */}
        <div className="flex justify-center mb-5">
          <span className="bg-[#0060DF] text-white font-black text-xs uppercase tracking-wider px-5 py-2 rounded-full shadow-sm">
            PARA QUEM É?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 text-center tracking-tight mb-10 sm:mb-16 leading-tight max-w-2xl mx-auto [text-wrap:balance]">
          Este kit foi feito para você:
        </h2>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex items-center gap-5 sm:gap-6"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 text-[#0060DF] flex items-center justify-center shrink-0 border border-sky-100">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

