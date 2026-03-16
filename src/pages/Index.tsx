import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
