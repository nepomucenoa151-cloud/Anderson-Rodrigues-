import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ShoppingBag, Sparkles } from "lucide-react";

interface Buyer {
  name: string;
  role: string;
  city: string;
  state: string;
  timeAgo: string;
}

const BUYERS_LIST: Buyer[] = [
  { name: "Sensei Lucas Mendes", role: "Instrutor", city: "São Paulo", state: "SP", timeAgo: "há 2 minutos" },
  { name: "Sensei Juliana Ribeiro", role: "Faixa Preta", city: "Curitiba", state: "PR", timeAgo: "há 4 minutos" },
  { name: "Sensei Rodrigo Albuquerque", role: "Dojo Shito-Ryu", city: "Belo Horizonte", state: "MG", timeAgo: "há 1 minuto" },
  { name: "Prof. Marcos Vinícius", role: "Educador Físico", city: "Rio de Janeiro", state: "RJ", timeAgo: "há 6 minutos" },
  { name: "Sensei Camila Takahashi", role: "Professora Kids", city: "Campinas", state: "SP", timeAgo: "há 3 minutos" },
  { name: "Sensei Eduardo Castro", role: "Dojo Shotokan", city: "Porto Alegre", state: "RS", timeAgo: "há 5 minutos" },
  { name: "Instrutora Larissa Gomes", role: "Karatê Escolar", city: "Salvador", state: "BA", timeAgo: "há 7 minutos" },
  { name: "Sensei Fernando Silveira", role: "Faixa Preta 3º Dan", city: "Goiânia", state: "GO", timeAgo: "há 2 minutos" },
  { name: "Sensei Beatriz Martins", role: "Projeto Karatê Kids", city: "Fortaleza", state: "CE", timeAgo: "há 8 minutos" },
  { name: "Sensei Rafael Nogueira", role: "Academia Budo", city: "Florianópolis", state: "SC", timeAgo: "há 3 minutos" },
  { name: "Sensei Thiago Matsumoto", role: "Dojo Goju-Ryu", city: "Brasília", state: "DF", timeAgo: "há 1 minuto" },
  { name: "Prof. Gabriel Duarte", role: "Instrutor Infantil", city: "Recife", state: "PE", timeAgo: "há 5 minutos" },
];

export function PurchaseNotifications() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shuffledQueue, setShuffledQueue] = useState<Buyer[]>([]);

  // Initialize and shuffle without repeats
  useEffect(() => {
    const shuffleArray = (array: Buyer[]) => {
      const copy = [...array];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    setShuffledQueue(shuffleArray(BUYERS_LIST));
  }, []);

  useEffect(() => {
    if (shuffledQueue.length === 0) return;

    let index = 0;

    // Initial delay of 4s before first toast, then interval of 9s
    const firstTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setIsVisible(true);

      // Hide after 4.5s
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 4500);

      // Recurring timer every 10 seconds
      const interval = setInterval(() => {
        index = (index + 1) % shuffledQueue.length;
        setCurrentIndex(index);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 4500);
      }, 10000);

      return () => {
        clearTimeout(hideTimeout);
        clearInterval(interval);
      };
    }, 4000);

    return () => clearTimeout(firstTimeout);
  }, [shuffledQueue]);

  if (currentIndex === null || !shuffledQueue[currentIndex]) return null;

  const currentBuyer = shuffledQueue[currentIndex];

  return (
    <div className="fixed top-16 right-3 sm:right-6 z-50 pointer-events-none max-w-[340px] sm:max-w-sm w-full">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -15, scale: 0.95, x: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-yellow-400/40 ring-1 ring-white/10 flex items-center gap-3.5"
          >
            {/* Animated Icon Avatar in Green */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-black shadow-md border border-green-400/40">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-slate-950 stroke-[3]" />
              </span>
            </div>

            {/* Notification Text Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-green-400 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-green-400" /> Compra Aprovada
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {currentBuyer.timeAgo}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
                {currentBuyer.name}
              </p>

              <p className="text-[11px] text-slate-300 truncate">
                comprou o <strong className="text-yellow-300 font-extrabold">PACOTE COMPLETO</strong>
              </p>

              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                📍 {currentBuyer.city}/{currentBuyer.state}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
