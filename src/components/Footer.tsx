import React from "react";
import { ShieldCheck, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-white font-black text-lg">
          <span className="text-xl">🥋</span>
          <span>KIT AULA KARATÊ KIDS</span>
        </div>

        <p className="max-w-xl text-slate-400 leading-relaxed text-xs">
          Material pedagógico digital desenvolvido especialmente para instrutores, dojos, academias e educadores físicos que ensinam Karatê infantil.
        </p>

        {/* Legal & Notice */}
        <div className="text-[11px] text-slate-500 max-w-2xl leading-relaxed space-y-2 border-t border-slate-900 pt-6">
          <p>
            Aviso: Este produto é um infoproduto educacional em formato digital (PDF). Os resultados obtidos com os alunos podem variar de acordo com a frequência de treino, metodologia aplicada pelo instrutor e engajamento da turma.
          </p>
          <p>© {new Date().getFullYear()} Kit Aula Karatê Kids. Todos os direitos reservados.</p>
        </div>

        {/* Support contact info */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Mail className="w-4 h-4 text-blue-400" />
          <span>Suporte ao cliente via e-mail: contato@kitkaratekids.com</span>
        </div>
      </div>
    </footer>
  );
}
