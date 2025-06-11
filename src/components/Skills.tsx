
import { Code, Server, Database, Palette } from "lucide-react";

const Skills = () => {
  const skills = [{
    category: "Frontend",
    icon: <Code className="w-8 h-8" />,
    iconBg: "bg-blue-500",
    technologies: [
      "React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"
    ]
  }, {
    category: "Backend", 
    icon: <Server className="w-8 h-8" />,
    iconBg: "bg-green-500",
    technologies: [
      "Node.js", "Python", "Java", "MySQL", "REST APIs", "MongoDB"
    ]
  }, {
    category: "Tools & Others",
    icon: <Database className="w-8 h-8" />,
    iconBg: "bg-purple-500", 
    technologies: [
      "Git", "Docker", "AWS", "Figma", "Testing", "CI/CD"
    ]
  }];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={skillCategory.category} className="animate-fade-in">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className={`${skillCategory.iconBg} rounded-lg p-3 mb-4`}>
                    <div className="text-white">
                      {skillCategory.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">
                    {skillCategory.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-purple-500/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
