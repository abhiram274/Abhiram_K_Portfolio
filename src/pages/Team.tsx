
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Team />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default TeamPage;
