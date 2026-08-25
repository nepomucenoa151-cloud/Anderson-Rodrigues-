import React from "react";
import warmupImg from "../assets/images/warmup_challenges_kids_1787594835506.jpg";
import calendarImg from "../assets/images/calendar_30days_kids_1787594853042.jpg";
import certificatesImg from "../assets/images/certificates_kids_dojo_1787594871922.jpg";
import ageGuideImg from "../assets/images/age_guide_book_kids_1787594884908.jpg";

export function DeliverablesGrid() {
  const items = [
    {
      title: "30 planos de aula",
      badge: "PRODUTO PRINCIPAL",
      badgeStyle: "bg-[#0060DF] text-white",
      desc: "Aulas prontas, organizadas e pensadas para o Karatê Kids.",
      image: "https://i.ibb.co/MyZnv2RN/gemini-2-5-flash-image-preciso-que-voce-fa-a-uma-imagem-igual-essa-porem-as-crian-as-praticando-kara.jpg",
    },
    {
      title: "150 brincadeiras",
      badge: "BÔNUS",
      badgeStyle: "bg-[#FFB800] text-slate-950",
      desc: "Atividades para variar o treino e recuperar a atenção da turma.",
      image: "https://i.ibb.co/1GpYXM21/gemini-2-5-flash-image-agora-preciso-de-uma-imagem-das-crian-as-fazendo-brincadeiras-na-aula-de-kara.jpg",
    },
    {
      title: "50 aquecimentos e desafios",
      badge: "BÔNUS",
      badgeStyle: "bg-[#FFB800] text-slate-950",
      desc: "Ideias rápidas para começar ou fechar o treino com energia.",
      image: warmupImg,
    },
    {
      title: "Guia pedagógico Kids",
      badge: "BÔNUS",
      badgeStyle: "bg-[#FFB800] text-slate-950",
      desc: "Guia Super prático que vai te ajudar com suas aulas semanalmente.",
      image: calendarImg,
    },
    {
      title: "Certificados Kids",
      badge: "BÔNUS",
      badgeStyle: "bg-[#FFB800] text-slate-950",
      desc: "Modelos editáveis para reconhecer participação e evolução.",
      image: "https://i.ibb.co/9kF8YHrB/Chat-GPT-Image-24-de-ago-de-2026-15-06-54.png",
    },
    {
      title: "Guia por faixa etária",
      badge: "BÔNUS",
      badgeStyle: "bg-[#FFB800] text-slate-950",
      desc: "Ajustes práticos para turmas de 5 a 13 anos.",
      image: "https://i.ibb.co/b4XNp0j/Gemini-Generated-Image-55jaub55jaub55ja.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-200 content-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="bg-blue-50 border border-blue-200 text-[#0060DF] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            MATERIAL COMPLETO
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4 tracking-tight leading-tight [text-wrap:balance]">
            Tudo o que você precisa para as próximas aulas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Um kit completo, estruturado e visualmente rico, pensado para facilitar sua vida de Sensei ou Educador.
          </p>
        </div>

        {/* Grade de 6 Cards (3 por linha no desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border border-slate-200 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Imagem do Card com Badge Sobreposta no Canto Superior Esquerdo */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-100 mb-4 border border-slate-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Badge */}
                  <span className={`absolute top-2.5 left-2.5 ${item.badgeStyle} text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md`}>
                    {item.badge}
                  </span>
                </div>

                {/* Textos: Título e Descrição */}
                <div className="px-2 sm:px-3 pb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

