
import { Button } from "@/components/ui/button";

const Projects = () => {
const projects = [


  {
    id: 3,
    title: "College Website Development",
    description: "Developed a fully functional college website with front-end and back-end integration. Utilized HTML, CSS, JavaScript, SCSS, PHP, and SQL.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    image: "/lovable-uploads/college-website.svg",
    github: "#",
    live: "#",
    featured: false
  },

  {
    id: 4,
    title: "Chatting Web Application",
    description: "Created a real-time chatting web app with modern UI using React and Firebase. Implemented authentication, real-time messaging, and user-friendly interface.",
    technologies: ["React", "Firebase", "JavaScript"],
    image: "/lovable-uploads/chat-app.png",
    github: "#",
    live: "#",
    featured: false
  },

    {
    id: 5,
    title: "Panda AI Virtual Assistant",
description: "Implemented core machine learning algorithms and real-world projects such as linear regression for house price prediction, heart disease classification, and face recognition. Focused on model accuracy, data preprocessing, and practical ML applications.",
    technologies: ["Python", "Speech Recognition", "NLP"],
    image: "/lovable-uploads/panda-ai.png",
    github: "#",
    live: "#",
    featured: false
  },
  

  {
    id: 6,
    title: "Machine Learning Concepts",
    description: "Developed various management systems like Internship and Website Management Systems. Focused on user accessibility, security, and automation.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: "/lovable-uploads/machine-learning.jpg", 
    github: "https://github.com/abhiram274/MachineLearning_concepts",
    live: "",
    featured: false
  },

  {
    id: 7,
    title: "Readgro",
    description: "Designed and deployed a Next.js-based web app for learning courses, referrals, and earning. Backend powered by Node.js with secure authentication.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/lovable-uploads/readgro.svg",
    github: "https://github.com/abhiram274/ReadGro",
    live: "https://www.readgro.com/",
    featured: true
  },

  {
    id: 8,
    title: "Flutter-Based Mini Projects",
    description: "Built applications like OTP Generator and To-Do List App using Flutter and Dart. Integrated Node.js for backend operations.",
    technologies: ["Flutter", "Dart", "Node.js"],
    image: "/images/flutter-mini.svg",
    github: "#",
    live: "#",
    featured: false
  },

  {
    id: 9,
    title: "Community Web Application ",
    description: "Community-based web app named MMK UNIVERSE allowing users to create events or programs for free and connect within the community.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/community-app.svg",
    github: "https://github.com/abhiram274/mmkuniverse-main",
    live: "https://mmkuniverse-main.vercel.app/",
    featured: true
  },

  {
    id: 10,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based recommendations.",
    technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
    image: "/placeholder.svg",
    github: "#",
    live: "#",
    featured: false
  },

  {
    id: 11,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing modern design principles and smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/placeholder.svg",
    github: "#",
    live: "#",
    featured: false
  },
 
  {
    id: 13,
    title: "AI Chat Bot",
    description: "An intelligent chatbot powered by machine learning with natural language processing capabilities.",
    technologies: ["Python", "TensorFlow", "React", "Flask", "NLP"],
    image: "/placeholder.svg",
    github: "#",
    live: "#",
    featured: false
  }
];


  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in group">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
