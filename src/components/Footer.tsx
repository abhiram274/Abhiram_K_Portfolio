
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
            <p className="text-muted-foreground mt-2">
              Web Developer & UI/UX Enthusiast
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-purple-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-purple-400 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-purple-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-purple-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                aria-label="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Alex Johnson. All rights reserved. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
