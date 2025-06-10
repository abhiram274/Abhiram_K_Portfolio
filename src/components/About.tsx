
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-200/30 to-blue-300/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full flex items-center justify-center glacial-drift">
                <div className="w-72 h-72 bg-gradient-to-br from-cyan-100/40 to-blue-200/40 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full flex items-center justify-center ice-shimmer">
                  <div className="w-64 h-64 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <span className="text-6xl font-bold text-cyan-600 dark:text-cyan-400">AJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Passionate Web Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, scalable, and user-centric applications. My journey started with curiosity 
              about how websites work, and it has evolved into a passion for crafting digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love working with React, TypeScript, and modern CSS frameworks to build 
              applications that not only look great but also provide exceptional user experiences. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50/80 to-blue-50/60 dark:from-cyan-900/30 dark:to-blue-900/20 backdrop-blur-sm rounded-lg border border-cyan-200/30 dark:border-cyan-700/30 frost-pulse">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50/80 to-cyan-50/60 dark:from-blue-900/30 dark:to-cyan-900/20 backdrop-blur-sm rounded-lg border border-blue-200/30 dark:border-blue-700/30 ice-shimmer">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
