
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Abhiram's AI assistant. I can help you learn more about his skills, projects, and experience. Feel free to ask me anything!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Nice to meet you! I'm here to help you learn more about Abhiram. What would you like to know?";
    }
    
    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "Abhiram is skilled in Python, C++, Java, JavaScript, and Dart. He works with React, Node.js, Next.js, Firebase, MySQL, and MongoDB. He's also experienced in AI/ML, web development, and mobile app development with Flutter!";
    }
    
    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      return "Abhiram has worked on some amazing projects! He built ReadGro (a learning platform), an AI Virtual Assistant, community web apps, real-time chat applications, and Flutter mobile apps. He's also developed college websites and management systems. Would you like to know more about any specific project?";
    }
    
    // Education
    if (message.includes('education') || message.includes('study') || message.includes('college') || message.includes('degree')) {
      return "Abhiram is currently pursuing his Bachelor of Technology in Computer Science and Engineering with a specialization in AI & ML at Anil Neerukonda Institute of Technology and Sciences. He also completed his Diploma in Computer Engineering from Government Polytechnic College, Rebaka.";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('intern')) {
      return "Abhiram worked as a Web Developer Intern at VBS Business Solutions for 6 months, where he developed and optimized web applications, enhanced UI/UX, and gained valuable experience in full-stack development and teamwork.";
    }
    
    // Contact/Hire
    if (message.includes('contact') || message.includes('hire') || message.includes('email') || message.includes('reach')) {
      return "You can reach out to Abhiram through the contact form on this website, or connect with him on LinkedIn or GitHub. He's always open to discussing new opportunities and interesting projects!";
    }
    
    // AI/ML specific
    if (message.includes('ai') || message.includes('machine learning') || message.includes('ml') || message.includes('artificial intelligence')) {
      return "Abhiram is passionate about AI & ML! He's currently specializing in it during his B.Tech and has worked on various ML projects including linear regression for house price prediction, heart disease classification, and face recognition systems.";
    }
    
    // Hobbies
    if (message.includes('hobby') || message.includes('hobbies') || message.includes('interest') || message.includes('free time')) {
      return "Abhiram loves watching sci-fi movies, learning about space and galaxies, reading about rockets and aerospace technology, listening to music, and spending time with nature and farm animals!";
    }
    
    // Specific technologies
    if (message.includes('react') || message.includes('javascript') || message.includes('node')) {
      return "Yes! Abhiram is proficient in React and has built several web applications using it, including real-time chat apps and community platforms. He also works with Node.js for backend development.";
    }
    
    if (message.includes('python')) {
      return "Absolutely! Python is one of Abhiram's favorite languages. He's used it for AI/ML projects, building virtual assistants, and implementing various algorithms for machine learning applications.";
    }
    
    if (message.includes('flutter') || message.includes('mobile')) {
      return "Abhiram has experience with Flutter and Dart for mobile app development. He's built applications like OTP generators and To-Do list apps, integrating them with Node.js backends.";
    }
    
    // Location/Availability
    if (message.includes('available') || message.includes('location') || message.includes('where')) {
      return "Abhiram is currently based in India and is available for both remote and local opportunities. He's always excited to work on innovative projects!";
    }
    
    // Thank you
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! I'm glad I could help. If you have any more questions about Abhiram or would like to get in touch with him, feel free to ask!";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! You can learn more about Abhiram by exploring his projects, skills, and experience on this website. Is there something specific you'd like to know?",
      "I'd love to help you learn more about Abhiram! You can ask me about his skills, projects, education, or experience. What interests you most?",
      "Abhiram is a talented developer with expertise in web development, AI/ML, and mobile apps. What would you like to know about his work?",
      "Feel free to ask me about Abhiram's technical skills, projects, education, or any other questions you might have!"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Abhiram..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
