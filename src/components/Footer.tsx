
import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Abhiram Kosuru</span>
            <p className="text-muted-foreground mt-2">Web Developer, AI&ML Enthusiast, Space and Technology.</p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-6">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => document.querySelector('#home')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              </button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              </button>
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              </button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://github.com/abhiram274" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200" 
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/abhiram-kosuru-7974b6231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:abhiramkosuru967@email.com" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200" 
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Abhiram Kosuru. All rights reserved. Built with Passion using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
