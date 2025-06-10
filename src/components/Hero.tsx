import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Web Developer", "Frontend Specialist", "UI/UX Enthusiast", "React Expert"];
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">I am a web developer, cloud enthusiast, and AI & ML student, passionate about building innovative solutions. Let's connect and explore the possibilities of creating intelligent and scalable applications together.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className=" hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;