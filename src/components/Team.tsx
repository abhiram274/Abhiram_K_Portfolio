
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abhiram Kosuru",
      role: "Full Stack Developer",
      image: "/lovable-uploads/713fa653-0787-4be4-abac-21c4f5038add.png",
      portfolio: "https://abhiram-portfolio-six.vercel.app/",
      description: "Passionate full-stack developer specializing in AI/ML and modern web technologies. Building innovative projects with cutting-edge solutions.",
      skills: ["React", "Node.js", "Python", "AI/ML", "TypeScript"],
      github: "https://github.com/abhiram274",
      linkedin: "https://linkedin.com/in/abhiram-kosuru-7974b6231/",
      email: "abhiramkosuru274@gmail.com"
    },
    {
      id: 2,
      name: "Nikith Nag",
      role: "UI/UX Designer & Web App Developer",
      image: "/placeholder.svg",
      portfolio: "#",
      description: "Creative designer and developer focused on user-centered design principles and creating beautiful, functional web applications with excellent user experience.",
      skills: ["Figma", "React", "UI/UX Design", "Web Development", "Prototyping"],
      github: "#",
      linkedin: "#",
      email: "nikithnag@example.com"
    },
    {
      id: 3,
      name: "Satya Datta",
      role: "Web App Developer & Cloud Engineer",
      image: "/placeholder.svg",
      portfolio: "#",
      description: "Web application developer with strong interest in cloud technologies. Specializes in building scalable web solutions and cloud infrastructure management.",
      skills: ["React", "Node.js", "AWS", "Cloud Computing", "Web Development"],
      github: "#",
      linkedin: "#",
      email: "satyadatta@example.com"
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
            A dynamic trio of talented developers and designers working together to create innovative solutions and deliver exceptional results.
          </p>
        </div>

{/*         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {teamMembers.map((member) => (
            <Card
  key={member.id}
  className="flex flex-col items-center text-center p-6 shadow-md border border-gray-200 rounded-lg bg-white hover:shadow-lg transition duration-300"
>
  <Avatar className="w-28 h-28 mb-4">
    <AvatarImage src={member.image} alt={member.name} className="rounded-full object-cover" />
    <AvatarFallback className="bg-gray-200 text-gray-600">
      {member.name.split(' ').map(n => n[0]).join('')}
    </AvatarFallback>
  </Avatar>

  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
  <p className="text-sm text-purple-500 font-medium">{member.role}</p>

  <p className="text-sm text-gray-600 mt-3">
    {member.description}
  </p>

  <div className="flex gap-4 mt-4">
    {member.github && (
      <a href={member.github} target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5 text-gray-500 hover:text-gray-900 transition" />
      </a>
    )}
    {member.linkedin && (
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-700 transition" />
      </a>
    )}
    <a href={`mailto:${member.email}`}>
      <Mail className="w-5 h-5 text-gray-500 hover:text-green-600 transition" />
    </a>
  </div>
                {member.portfolio !== "#" && (
    <Button
      variant="outline"
      size="sm"
      className="mt-4 border-purple-500 text-purple-600 hover:bg-purple-50 transition"
      onClick={() => window.open(member.portfolio, '_blank')}
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Portfolio
    </Button>
  )}

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
