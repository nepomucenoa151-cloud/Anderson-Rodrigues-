import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X, ShieldCheck, Zap, Award, ArrowRight, Sparkles, Star, Lock } from "lucide-react";
import { UpsellModal } from "./UpsellModal";

export function PricingOffer() {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  const handleContinueBasic = () => {
    setShowUpsell(false);
    window.open("https://pay.cakto.com.br/basdj8y", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="precos" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden content-auto">
      {/* Upsell Modal */}
      <UpsellModal 
        isOpen={showUpsell}
        onClose={() => setShowUpsell(false)}
        onContinueBasic={handleContinueBasic}
      />
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-yellow-400 font-extrabold text-xs uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full">
            ESCOLHA SEU PACOTE IDEAL
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight leading-tight [text-wrap:balance]">
            Invista nas suas aulas hoje mesmo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Acesso vitalício, download imediato e risco zero com nossa garantia incondicional.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* CARD 1: PACOTE BÁSICO */}
          <div className="bg-slate-800/90 rounded-3xl p-7 sm:p-8 border-2 border-slate-700 flex flex-col justify-between hover:border-slate-500 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-end mb-4">
                <span className="text-xs font-bold text-slate-400">Acesso Digital</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2 uppercase">
                PACOTE BÁSICO
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Para quem quer apenas os planos de aula básicos do dia a dia.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-slate-700">
                <div className="text-slate-400 line-through text-xs font-bold mb-1">De R$ 37,00</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-300 text-sm font-bold">Por apenas</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">R$ 14,90</span>
                </div>
                <span className="text-slate-400 text-xs font-medium">Pagamento único • Sem mensalidades</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-sm mb-8 text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>30 Planos de Aula Base em PDF</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Acesso Imediato no E-mail</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Formato para Celular, Tablet e Impressão</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-500">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Sem os 5 Super Bônus Exclusivos</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-500">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Sem Certificados e Jogos Lúdicos</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleBasicClick}
              className="w-full py-4 px-6 rounded-full border-2 border-slate-500 hover:border-white text-slate-200 hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider text-center transition-all block cursor-pointer"
            >
              Quero o PACOTE BÁSICO
            </button>
          </div>

          {/* CARD 2: PACOTE COMPLETO (DESTAQUE / MAIS VENDIDO) */}
          <div className="bg-gradient-to-b from-slate-800 via-slate-800 to-blue-950 rounded-3xl p-7 sm:p-9 border-2 border-yellow-400 flex flex-col justify-between shadow-2xl relative">
            {/* Best Seller Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-950 px-5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>O MAIS ESCOLHIDO PELOS SENSEIS</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-300 bg-yellow-400/20 border border-yellow-400/30 px-3 py-1 rounded-full">
                  PACOTE COMPLETO
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Economia de 80%
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase flex items-center gap-2">
                <span>PACOTE COMPLETO</span>
                <span className="text-xs bg-red-600 text-white font-black px-2 py-0.5 rounded-full">HOT</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 font-medium">
                Tudo o que você precisa: 30 planos completos + todos os 5 super bônus.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-slate-700/80 bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
                <div className="text-slate-400 line-through text-xs font-bold mb-1">De R$ 97,00</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-yellow-400 text-sm font-bold">Por apenas</span>
                  <span className="text-5xl sm:text-6xl font-black text-yellow-300 tracking-tight">R$ 47,00</span>
                </div>
                <span className="text-emerald-400 text-xs font-bold block mt-1">
                  ✓ Apenas R$ 1,56 por dia • Acesso Vitalício
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 text-sm mb-8 font-medium">
                <li className="flex items-start gap-2.5 text-white font-bold">
                  <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>30 Planos de Aula Completos de Karatê</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-200">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>+ BÔNUS #1:</strong> 150 Brincadeiras & Jogos Lúdicos</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-200">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>+ BÔNUS #2:</strong> 50 Aquecimentos & Desafios Motores</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-200">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>+ BÔNUS #3:</strong> Guia Pedagógico Kids Semanal</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-200">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>+ BÔNUS #4:</strong> Certificados Kids Editáveis</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-200">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>+ BÔNUS #5:</strong> Guia por Idade (3 a 12 anos)</span>
                </li>
                <li className="flex items-start gap-2.5 text-yellow-300 font-bold bg-yellow-400/10 p-1.5 rounded-lg border border-yellow-400/20">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>+ Vídeo Aula Karatê Kids em Ação! 🥋⭐ Treino Técnico e Lúdico</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-300 font-semibold">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso Vitalício e Atualizações Futuras</span>
                </li>
              </ul>
            </div>

            <div>
              <motion.a
                href="https://pay.wiapy.com/xLf4-Vw8G_RO"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glow-button w-full py-5 px-6 rounded-full bg-green-500 hover:bg-green-600 text-white font-black text-base sm:text-lg uppercase tracking-tight text-center transition-all block shadow-2xl cursor-pointer no-underline border-2 border-green-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>QUERO O PACOTE COMPLETO</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>
              <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400 font-bold">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-green-400" /> Compra Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-yellow-400" /> Entrega Imediata
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-blue-400" /> 7 Dias Garantia
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
