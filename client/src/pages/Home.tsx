/**
 * مقصد الحرمين — ONE-PAGE Premium Landing Page (Royal Serenity)
 * ترتيب الأقسام حسب المواصفات: Header → Hero → Quick Booking → Intro → Programs
 * → Hotels → Transport → Experience → Why Us → Journey → Testimonials → FAQ → Final CTA → Footer
 */
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import QuickBooking from "@/components/landing/QuickBooking";
import Intro from "@/components/landing/Intro";
import Programs from "@/components/landing/Programs";
import Hotels from "@/components/landing/Hotels";
import Transport from "@/components/landing/Transport";
import Experience from "@/components/landing/Experience";
import WhyUs from "@/components/landing/WhyUs";
import Journey from "@/components/landing/Journey";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import { useRevealOnScroll } from "@/hooks/useReveal";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <Header />
      <main>
        <Hero />
        <QuickBooking />
        <Intro />
        <Programs />
        <Hotels />
        <Transport />
        <Experience />
        <WhyUs />
        <Journey />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
