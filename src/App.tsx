import React from "react";
import { TopBar } from "./components/TopBar";
import { PurchaseNotifications } from "./components/PurchaseNotifications";
import { HeroSection } from "./components/HeroSection";
import { WhatIsTheKit } from "./components/WhatIsTheKit";
import { HowItWorks } from "./components/HowItWorks";
import { DeliverablesGrid } from "./components/DeliverablesGrid";
import { TargetAudience } from "./components/TargetAudience";
import { PricingOffer } from "./components/PricingOffer";
import { Testimonials } from "./components/Testimonials";
import { GuaranteeAndSecurity } from "./components/GuaranteeAndSecurity";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-yellow-400 selection:text-slate-950 relative">
      {/* Notificações automáticas de compra (topo canto direito) */}
      <PurchaseNotifications />

      {/* 1. BARRA SUPERIOR (TOP BAR) */}
      <TopBar />

      {/* 2. HERO SECTION (DOBRA PRINCIPAL) */}
      <HeroSection />

      {/* 3. SEÇÃO: O QUE É O KIT (4 PILARES) */}
      <WhatIsTheKit />

      {/* 4. SEÇÃO: COMO FUNCIONA */}
      <HowItWorks />

      {/* 5. SEÇÃO: O QUE VOCÊ RECEBE (ENTREGÁVEIS) */}
      <DeliverablesGrid />

      {/* 6. SEÇÃO: PARA QUEM É ESTE MATERIAL */}
      <TargetAudience />

      {/* 7. SEÇÃO: DEPOIMENTOS E PROVA SOCIAL */}
      <Testimonials />

      {/* 8. SEÇÃO: OFERTA & PREÇOS (TABELA DE PREÇOS COMPARAÇÃO) */}
      <PricingOffer />

      {/* 9. SEÇÃO: GARANTIA & SEGURANÇA */}
      <GuaranteeAndSecurity />

      {/* 10. SEÇÃO: FAQ / PERGUNTAS FREQUENTES */}
      <FaqSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
