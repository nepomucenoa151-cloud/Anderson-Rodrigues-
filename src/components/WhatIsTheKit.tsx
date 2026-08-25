import React from "react";
import { Dumbbell, BookOpenCheck, Trophy, ClipboardCheck } from "lucide-react";

export function WhatIsTheKit() {
  const pillars = [
    {
      number: "01",
      title: "Aquecimento",
      desc: "Comece a aula com foco, movimento e energia.",
      icon: Dumbbell,
    },
    {
      number: "02",
      title: "Técnica",
      desc: "Apresente o fundamento do dia com direção.",
      icon: BookOpenCheck,
    },
    {
      number: "03",
      title: "Dinâmica ou desafio",
      desc: "Transforme a prática em uma atividade envolvente.",
      icon: Trophy,
    },
    {
      number: "04",
      title: "Encerramento",
      desc: "Feche a aula com clareza e uma boa rotina.",
      icon: ClipboardCheck,
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-50 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            ESTRUTURA COMPLETA
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 leading-tight [text-wrap:balance]">
            Você não precisa mais montar a aula do zero
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Cada plano já mostra o que fazer do início ao fim da aula.
          </p>
        </div>

        {/* 4 Cards Grid - Modelo Exato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon and Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-400 tracking-wider">
                      {pilar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {pilar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pilar.desc}
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

