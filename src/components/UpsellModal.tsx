import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Gift, Flame } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueBasic: () => void;
}

export function UpsellModal({ isOpen, onClose, onContinueBasic }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.45 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 border-2 border-yellow-400 rounded-3xl p-5 sm:p-7 shadow-[0_0_50px_rgba(234,179,8,0.25)] text-white z-10 my-auto overflow-hidden"
        >
          {/* Top Decorative Flare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1 rounded-full animate-pulse shadow-md">
              <Flame className="w-3.5 h-3.5 fill-current" />
              ESPERE! OFERTA ÚNICA E EXCLUSIVA
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
              Leve o <span className="text-yellow-400">PACOTE COMPLETO</span> por apenas:
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Desbloqueie todos os 5 Super Bônus + Vídeo Aula pelo menor valor já visto!
            </p>
          </div>

          {/* Price Box */}
          <div className="bg-slate-800/90 border border-yellow-400/40 rounded-2xl p-3.5 sm:p-4 mb-4 text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <span className="text-slate-400 line-through text-xs sm:text-sm font-semibold">De R$ 97,00</span>
              <span className="text-red-400 line-through text-xs sm:text-sm font-semibold">Por R$ 47,00</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full border border-emerald-400/30">
                OFERTA RELÂMPAGO
              </span>
            </div>
            
            <div className="flex items-baseline justify-center gap-1.5 my-1">
              <span className="text-yellow-400 font-bold text-sm sm:text-base">Por apenas</span>
              <span className="text-4xl sm:text-5xl font-black text-yellow-300 tracking-tight">R$ 27,00</span>
            </div>
            
            <span className="text-[11px] sm:text-xs text-emerald-400 font-bold">
              ✓ Pagamento único • Apenas R$ 12,10 a mais que o plano básico!
            </span>
          </div>

          {/* What's included in this special promo */}
          <div className="bg-slate-950/50 rounded-xl p-3.5 border border-slate-800 mb-5">
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-yellow-400" />
              Você vai receber tudo isso:
            </div>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>30 Planos de Aula Completos em PDF</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-200 font-semibold">
                <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span><strong>Bônus:</strong> 150 Brincadeiras e Jogos Lúdicos</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-200 font-semibold">
                <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span><strong>Bônus:</strong> 50 Aquecimentos & Desafios Motores</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-200 font-semibold">
                <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span><strong>Bônus:</strong> Certificados Editáveis + Guia Pedagógico</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-300 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>+ Vídeo Aula Prática Karatê Kids em Ação!</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5">
            <motion.a
              href="https://pay.cakto.com.br/ssyyogf_814327"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button w-full py-4 px-5 rounded-full bg-green-500 hover:bg-green-600 text-white font-black text-sm sm:text-base uppercase tracking-tight text-center transition-all shadow-xl cursor-pointer no-underline border-2 border-green-300 flex items-center justify-center gap-2"
            >
              <span>SIM! QUERO O COMPLETO POR R$ 27,00</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </motion.a>

            <button
              onClick={onContinueBasic}
              className="text-slate-400 hover:text-slate-200 text-xs sm:text-xs font-semibold underline underline-offset-4 py-1 text-center transition-colors cursor-pointer"
            >
              Não, prefiro continuar apenas com o Pacote Básico por R$ 14,90
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-3 pt-2 text-[10px] text-slate-400 font-semibold border-t border-slate-800">
            <span className="flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-green-400" /> Compra Segura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-yellow-400" /> Acesso Imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-blue-400" /> 7 Dias de Garantia
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
