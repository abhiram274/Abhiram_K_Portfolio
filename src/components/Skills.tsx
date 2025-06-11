
const Skills = () => {
  const skills = [{
    category: "Frontend",
    technologies: [{
      name: "React",
      level: 95
    }, {
      name: "TypeScript",
      level: 90
    }, {
      name: "Next.js",
      level: 88
    }, {
      name: "Tailwind CSS",
      level: 92
    }, {
      name: "JavaScript",
      level: 95
    }, {
      name: "HTML/CSS",
      level: 98
    }]
  }, {
    category: "Backend",
    technologies: [{
      name: "Node.js",
      level: 85
    }, {
      name: "Python",
      level: 80
    }, {
      name: "Java",
      level: 95
    }, {
      name: "MySQL",
      level: 95
    }, {
      name: "REST APIs",
      level: 90
    }, {
      name: "MongoDB",
      level: 78
    }]
  }, {
    category: "Tools & Others",
    technologies: [{
      name: "Git",
      level: 92
    }, {
      name: "Docker",
      level: 75
    }, {
      name: "AWS",
      level: 70
    }, {
      name: "Figma",
      level: 85
    }, {
      name: "Testing",
      level: 80
    }, {
      name: "CI/CD",
      level: 78
    }]
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
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.technologies.map(tech => (
                    <div key={tech.name} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      <span className="text-sm text-purple-400 font-semibold">{tech.level}%</span>
                    </div>
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
