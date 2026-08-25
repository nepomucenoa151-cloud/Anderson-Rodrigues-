import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como recebo o material?",
      a: "O acesso é 100% digital e imediato. Assim que o seu pagamento for aprovado (cartão ou Pix), você receberá um e-mail com os links seguros para baixar todos os arquivos em PDF no seu computador, tablet ou celular."
    },
    {
      q: "O material é físico ou digital?",
      a: "É 100% digital no formato PDF de alta resolução. Você não precisa esperar frete nem pagar entrega: o acesso é instantâneo e você pode salvar no Google Drive, celular ou imprimir quando quiser."
    },
    {
      q: "Para qual idade serve?",
      a: "O kit foi desenvolvido especialmente para crianças de 3 a 12 anos. O material inclui orientações pedagógicas para adaptar os treinos entre Baby Karatê (3 a 5 anos), Infantil (6 a 8 anos) e Pré-Juvenil (9 a 12 anos)."
    },
    {
      q: "Posso imprimir o material?",
      a: "Sim, com certeza! Todos os PDFs já vêm configurados no padrão A4, prontos para impressão em qualquer impressora caseira ou gráfica rápida, além de serem perfeitamente legíveis na tela do celular durante a aula."
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Se dentro de 7 dias após a compra você sentir que o material não atendeu às suas expectativas, basta nos enviar um e-mail solicitando o reembolso. Devolvemos 100% do valor pago sem nenhuma burocracia."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
          DÚVIDAS FREQUENTES
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4 tracking-tight leading-tight [text-wrap:balance]">
          Perguntas Frequentes
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Tire suas dúvidas antes de garantir o seu Kit Aula Karatê Kids.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg leading-snug flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Final Bottom CTA banner */}
      <div className="mt-12 text-center bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-yellow-400/40">
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
            Pronto para transformar suas aulas?
          </h3>
          <p className="text-slate-400 text-sm">
            Garanta agora com acesso imediato e preço promocional.
          </p>
        </div>
        <motion.a
          href="#precos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-base px-6 py-4 rounded-full uppercase tracking-tight shadow-lg no-underline cursor-pointer shrink-0 border border-green-300"
        >
          <span>QUERO MEU KIT AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
