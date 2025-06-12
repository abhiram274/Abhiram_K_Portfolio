import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Web App Developer", "AI & ML Enthusiast", "Tech Buddy", "Cloud Computing "];
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Abhiram Kosuru</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
              <span className="font-normal">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">I am a web developer, cloud enthusiast, and AI & ML student, passionate about building innovative solutions. Let's connect and explore the possibilities of creating intelligent and scalable applications together.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
              View My Work
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
                  My Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    About Abhiram Kosuru
                  </DialogTitle>
                </DialogHeader>
                
                <Tabs defaultValue="education" className="w-full mt-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="education" className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Education
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Experience
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Skills
                    </TabsTrigger>
                    <TabsTrigger value="hobbies" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Hobbies
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="education" className="mt-6 space-y-4">
                    <div className="space-y-6">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="text-lg font-semibold">Bachelor of Technology in Computer Science and Engineering (AI & ML)</h3>
                        <p className="text-muted-foreground">Anil Neerukonda Institute of Technology and Sciences (Ongoing)</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold">Diploma in Computer Engineering</h3>
                        <p className="text-muted-foreground">Government Polytechnic College, Rebaka, Anakapalli</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-lg font-semibold">10th Grade</h3>
                        <p className="text-muted-foreground">Little Flowers E.M High School</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="experience" className="mt-6 space-y-4">
                    <div className="space-y-6">
                      <div className="border border-border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Web Developer Intern</h3>
                        <p className="text-purple-400 mb-2">VBS Business Solutions (6 months)</p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Developed and optimized web applications while enhancing UI/UX</li>
                          <li>• Gained expertise in teamwork, project management, and effective communication</li>
                          <li>• Improved problem-solving, decision-making skills, and hands-on experience in full-stack development</li>
                        </ul>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-3 rounded">
                          <h4 className="font-medium">Cyber Security Workshop</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Participated in an intensive cybersecurity workshop covering ethical hacking, security breaches, and data protection. Secured 2nd place in the Mini Hackathon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="skills" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-purple-400">Programming Languages</h4>
                            <p className="text-sm text-muted-foreground">Python, C++, Java, JavaScript, Dart (Flutter)</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-400">Web Technologies</h4>
                            <p className="text-sm text-muted-foreground">HTML, CSS, React, Node.js</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-400">Databases</h4>
                            <p className="text-sm text-muted-foreground">MySQL, MongoDB</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-orange-400">Other Technologies</h4>
                            <p className="text-sm text-muted-foreground">Next.js, Firebase, SCSS, PHP</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            <div>
                              <span className="font-medium">Time Management</span>
                              <p className="text-xs text-muted-foreground">Efficiently balances multiple projects and deadlines</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <div>
                              <span className="font-medium">Decision Making</span>
                              <p className="text-xs text-muted-foreground">Analyzes situations to make well-informed decisions</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            <div>
                              <span className="font-medium">Problem Solving</span>
                              <p className="text-xs text-muted-foreground">Tackles complex coding and debugging challenges with ease</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-orange-400">•</span>
                            <div>
                              <span className="font-medium">Teamwork</span>
                              <p className="text-xs text-muted-foreground">Collaborates effectively within a group to achieve project success</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-pink-400">•</span>
                            <div>
                              <span className="font-medium">Leadership</span>
                              <p className="text-xs text-muted-foreground">Takes initiative and guides team members toward productivity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="hobbies" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🚀 Space & Technology</h4>
                        <p className="text-sm text-muted-foreground">
                          Watching sci-fi movies, exploring futuristic concepts, learning about space and galaxies, reading about rockets and aerospace technology.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🎵 Music & Nature</h4>
                        <p className="text-sm text-muted-foreground">
                          Listening to music for relaxation and creativity, spending time with nature, taking care of farm animals, and appreciating the environment.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            
            <Button onClick={scrollToContact} variant="outline" size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
