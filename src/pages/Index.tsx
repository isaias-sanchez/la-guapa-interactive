import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import JoinTeam from "@/components/JoinTeam";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MenuSection />
      <JoinTeam />
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
