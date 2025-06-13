
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abhiram Kosuru",
      role: "Full Stack Developer & Team Lead",
      image: "/lovable-uploads/713fa653-0787-4be4-abac-21c4f5038add.png",
      portfolio: "https://abhiram-portfolio-six.vercel.app/",
      description: "Passionate full-stack developer specializing in AI/ML and modern web technologies. Leading innovative projects with cutting-edge solutions.",
      skills: ["React", "Node.js", "Python", "AI/ML", "TypeScript"],
      github: "https://github.com/abhiram274",
      linkedin: "https://linkedin.com/in/abhiram-kosuru-7974b6231/",
      email: "abhiramkosuru274@gmail.com"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
      portfolio: "https://sarahchen-design.com",
      description: "Creative designer focused on user-centered design principles and creating beautiful, functional interfaces that enhance user experience.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah.chen@example.com"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Backend Developer",
      image: "/placeholder.svg",
      portfolio: "https://michaelrod-dev.com",
      description: "Backend specialist with expertise in scalable architectures, cloud computing, and database optimization for high-performance applications.",
      skills: ["Node.js", "Python", "AWS", "MongoDB", "PostgreSQL"],
      github: "https://github.com/michaelrod",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      email: "michael.rodriguez@example.com"
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "DevOps Engineer",
      image: "/placeholder.svg",
      portfolio: "https://priyasharma-devops.com",
      description: "DevOps expert passionate about automation, CI/CD pipelines, and cloud infrastructure management for seamless deployment processes.",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      github: "https://github.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      email: "priya.sharma@example.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse group of talented professionals working together to create innovative solutions and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-card via-card to-accent/5 border-2 hover:border-purple-500/20">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24 border-4 border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-purple-400 mb-2">{member.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 rounded-full border border-purple-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none"
                      onClick={() => window.open(member.portfolio, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Portfolio
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-purple-500/10 hover:border-purple-500/20"
                        onClick={() => window.open(member.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-blue-500/10 hover:border-blue-500/20"
                        onClick={() => window.open(member.linkedin, '_blank')}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-green-500/10 hover:border-green-500/20"
                        onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
