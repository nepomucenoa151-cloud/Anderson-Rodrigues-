import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ZoomIn, X, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      src: "https://i.ibb.co/FLzdsnb5/Gemini-Generated-Image-6nvwvm6nvwvm6nvw.jpg",
      alt: "Depoimento 1 - Feedback real de professor de Karatê Infantil no WhatsApp",
      title: "Feedback no WhatsApp",
      highlight: "Retenção e engajamento",
      author: "Sensei Ricardo M."
    },
    {
      id: 2,
      src: "https://i.ibb.co/4nXmKCyT/Gemini-Generated-Image-56qb8o56qb8o56qb.jpg",
      alt: "Depoimento 2 - Feedback sobre resultados no dojo e aprovação dos alunos",
      title: "Resultados no Tatame",
      highlight: "Aulas dinâmicas e lúdicas",
      author: "Sensei Marcos V."
    },
    {
      id: 3,
      src: "https://i.ibb.co/1DtVhst/Gemini-Generated-Image-ntd91fntd91fntd9.jpg",
      alt: "Depoimento 3 - Economia de tempo no planejamento de treinos",
      title: "Praticidade e Economia",
      highlight: "Economia de horas semanais",
      author: "Sensei Carlos A."
    },
    {
      id: 4,
      src: "https://i.ibb.co/QjffYkPn/Gemini-Generated-Image-hj14mwhj14mwhj14.jpg",
      alt: "Depoimento 4 - Elogios dos pais e motivação das crianças",
      title: "Aprovação dos Pais",
      highlight: "Novos alunos e satisfação",
      author: "Sensei Roberto T."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || zoomImage) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, zoomImage]);

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden content-auto">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-100/90 border border-emerald-300/80 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
              DEPOIMENTOS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight [text-wrap:balance]">
            O que outros Senseis estão dizendo
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Prints reais de professores e instrutores de Karatê que transformaram suas turmas infantis com o material.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Depoimentos 100% reais de quem aplica no tatame</span>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Frame */}
          <div className="relative rounded-3xl p-3 sm:p-5 bg-white border-2 border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            
            {/* Top Bar with Badge & Fullscreen trigger */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1 sm:px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {testimonials[currentIndex].author} • <span className="text-[#0060DF] font-medium">{testimonials[currentIndex].highlight}</span>
                </span>
              </div>

              <button
                onClick={() => setZoomImage(testimonials[currentIndex].src)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0060DF] bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors cursor-pointer font-medium touch-manipulation min-h-[36px]"
                title="Clique para ampliar o depoimento"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ampliar print</span>
              </button>
            </div>

            {/* Image Viewer with Motion Animation */}
            <div 
              onClick={() => setZoomImage(testimonials[currentIndex].src)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[500px] flex items-center justify-center bg-slate-950/5 rounded-2xl overflow-hidden cursor-zoom-in group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={testimonials[currentIndex].src}
                  alt={testimonials[currentIndex].alt}
                  width={800}
                  height={500}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Clique para ver em tela cheia
                </span>
              </div>
            </div>

            {/* Left / Right Navigation Buttons (Touch optimized) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Depoimento anterior"
              className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200/90 flex items-center justify-center transition-all hover:bg-blue-50 hover:text-[#0060DF] hover:scale-110 active:scale-95 cursor-pointer z-20 touch-manipulation"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Próximo depoimento"
              className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200/90 flex items-center justify-center transition-all hover:bg-blue-50 hover:text-[#0060DF] hover:scale-110 active:scale-95 cursor-pointer z-20 touch-manipulation"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Progress Indicators & Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                  currentIndex === index
                    ? "w-8 bg-[#0060DF] shadow-md shadow-blue-500/40"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Quick Select Thumbnails */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-4 max-w-xl mx-auto">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer aspect-[4/3] bg-white p-0.5 touch-manipulation ${
                  currentIndex === index
                    ? "border-[#0060DF] ring-2 ring-blue-500/30 scale-105 shadow-md"
                    : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width={150}
                  height={112}
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomImage(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 sm:p-4 shadow-2xl z-10 flex flex-col items-center"
            >
              <button
                onClick={() => setZoomImage(null)}
                className="absolute -top-4 -right-4 sm:top-3 sm:right-3 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors z-20 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={zoomImage}
                alt="Depoimento em tela cheia"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
