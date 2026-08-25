import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Award, ArrowRight, Sparkles, CheckCircle2, Star, BookOpen, Layers } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-10 md:pt-16 pb-14 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Badge do Produto */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-sm"
      >
        <span className="text-base">🥋</span>
        <span>KIT AULA KARATÊ KIDS</span>
        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">OFICIAL</span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest mb-3 flex items-center gap-1.5 justify-center"
      >
        <Sparkles className="w-4 h-4 text-slate-900" />
        MATERIAL DIGITAL PARA KARATÊ INFANTIL
        <Sparkles className="w-4 h-4 text-slate-900" />
      </motion.p>

      {/* Imagem do Material Digital */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="mb-6 max-w-2xl w-full px-2"
      >
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 bg-white">
          <img
            src="https://i.ibb.co/S4v6nCcf/Chat-GPT-Image-24-de-ago-de-2026-20-56-01.png"
            alt="Kit Aula Karatê Kids - Material Digital"
            className="w-full h-auto object-contain block mx-auto hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Headline Principal */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-2xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.2] sm:leading-[1.15] tracking-tight max-w-4xl mb-5 [text-wrap:balance]"
      >
        Pare de <span className="text-[#4F5AFF]">improvisar</span> suas aulas de <span className="text-[#EAB308] drop-shadow-sm">Karatê Kids</span>.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-8"
      >
        Tenha <strong className="text-slate-900 font-bold">30 aulas completas e organizadas passo a passo</strong>: escolha e aplique no dojo com aquecimento, técnica de karatê, dinâmica e encerramento. Economize tempo de planejamento e garanta retenção na próxima aula.
      </motion.p>

      {/* Mockup / Card Visual do Material */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-full max-w-3xl mb-10 relative"
      >
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-blue-500/30 relative overflow-hidden">
          {/* Decorative martial elements */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-3 max-w-md">
              <div className="inline-flex items-center gap-1.5 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 px-3 py-1 rounded-full text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                Mais de 1.200 Senseis e Dojos no Brasil
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                30 Planos de Aula Prontos + 5 Super Bônus
              </h2>
              <ul className="space-y-2 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Kihon, Kata e Desafios Lúdicos adaptados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Formato 100% Digital PDF (Celular, Tablet ou Impressão)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Metodologia testada para retenção infantil</span>
                </li>
              </ul>
            </div>

            {/* Visual Book Stack Simulation */}
            <div className="relative flex flex-col items-center justify-center p-4 bg-slate-800/80 rounded-2xl border border-slate-700 w-full md:w-auto shadow-inner">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-16 bg-gradient-to-b from-red-600 to-red-800 rounded-md shadow-md flex flex-col items-center justify-center text-white border border-red-400/30">
                  <span className="text-[9px] font-black uppercase">Aulas</span>
                  <span className="text-sm font-black">30</span>
                </div>
                <div className="w-12 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-md shadow-md flex flex-col items-center justify-center text-white border border-blue-400/30">
                  <span className="text-[9px] font-black uppercase">Jogos</span>
                  <span className="text-sm font-black">150</span>
                </div>
                <div className="w-12 h-16 bg-gradient-to-b from-amber-500 to-amber-700 rounded-md shadow-md flex flex-col items-center justify-center text-white border border-yellow-400/30">
                  <span className="text-[8px] font-black uppercase">Aquec.</span>
                  <span className="text-sm font-black">50</span>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-yellow-400" /> Pacote Didático Completo em PDF
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <div className="w-full flex flex-col items-center gap-3 mb-6">
        <motion.a
          href="#precos"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("precos");
            if (target) {
              const topOffset = 60; // Offset for top fixed bar
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - topOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glow-button inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-extrabold text-sm sm:text-lg md:text-xl px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full shadow-lg transition-all uppercase tracking-tight text-center w-full max-w-sm sm:max-w-md no-underline cursor-pointer border-2 border-green-400"
        >
          <span>Quero minhas aulas prontas</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        </motion.a>
        
        {/* Micro-copy */}
        <p className="text-xs sm:text-sm text-slate-500 font-semibold flex items-center justify-center gap-2 flex-wrap">
          <span>⚡ Acesso imediato</span>
          <span>•</span>
          <span>📲 Material digital</span>
          <span>•</span>
          <span>🛡️ Satisfação garantida</span>
        </p>
      </div>

      {/* Trust Badges Bar */}
      <div className="w-full max-w-2xl pt-6 border-t border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>Compra 100% Segura</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Envio Instantâneo</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-blue-600" />
          <span>Garantia de 7 Dias</span>
        </div>
      </div>
    </section>
  );
}
