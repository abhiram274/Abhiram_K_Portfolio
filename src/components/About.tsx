const About = () => {
  return <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-card rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-muted-foreground">AJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Passionate Tech Enthusiast</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">As a web developer with over 3 years of experience, I specialize in building modern, scalable, and user-centric applications. My journey began with a curiosity about how websites function and has evolved into a passion for crafting exceptional digital experiences, now enhanced by my interest in cloud technologies, AI, and ML.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">I enjoy working with React, TypeScript, and modern CSS frameworks to develop applications that are not only visually appealing but also deliver outstanding user experiences. Beyond coding, I dedicate my time to exploring new cloud technologies, AI/ML concepts, contributing to open-source projects, and mentoring aspiring developers in these exciting fields. Let's build something amazing that leverages the power of the cloud and intelligent algorithms!</p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;