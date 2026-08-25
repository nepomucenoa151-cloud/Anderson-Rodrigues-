import React from "react";
import { ShieldCheck, Lock, MailCheck, RotateCcw, Award, CheckCircle } from "lucide-react";

export function GuaranteeAndSecurity() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-slate-200 content-auto">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50 rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-lg text-center flex flex-col items-center">
          
          {/* Guarantee Icon Seal */}
          <div className="mb-6 flex items-center justify-center">
            <img 
              src="https://i.ibb.co/7xvBBW7s/Captura-de-tela-2026-08-24-171433.png" 
              alt="Garantia e Segurança Blindada" 
              width={96}
              height={96}
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-md rounded-full"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>

          <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-100 px-3.5 py-1 rounded-full mb-3">
            GARANTIA TOTAL DE RISCO ZERO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Teste por 7 dias!
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Adquira o <strong>Kit Aula Karatê Kids</strong> hoje, baixe todo o material e aplique nas suas aulas. Se por qualquer motivo você achar que não valeu a pena, basta nos enviar um único e-mail dentro do prazo de 7 dias que <strong>devolvemos 100% do seu dinheiro</strong>, sem letras miúdas.
          </p>

          {/* Security Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-slate-200 text-left">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Compra 100% Segura</h3>
                <p className="text-[11px] text-slate-500">Criptografia SSL de 256 bits</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MailCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Entrega Imediata</h3>
                <p className="text-[11px] text-slate-500">Link direto no seu e-mail</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 text-amber-600 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Reembolso Fácil</h3>
                <p className="text-[11px] text-slate-500">Devolução rápida e sem burocracia</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
