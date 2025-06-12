
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
      text: "Hey there! 👋 I'm Abhiram Kosuru. Thanks for visiting my portfolio! Feel free to ask me anything about my work, skills, or projects. I'm here to chat!",
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
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hii')) {
      const greetings = [
        "Hello! Great to meet you! 😊 What would you like to know about my work or experience?",
        "Hey! Thanks for stopping by my portfolio! How can I help you today?",
        "Hi there! I'm excited to chat with you. What brings you to my portfolio today?",
        "Hello! Welcome to my digital space! Feel free to ask me anything about my projects or journey."
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // About me / Who are you
    if (message.includes('who are you') || message.includes('about you') || message.includes('tell me about yourself')) {
      return "I'm Abhiram Kosuru, a passionate Computer Science student specializing in AI & ML at Anil Neerukonda Institute of Technology. I love building web applications, exploring AI technologies, and creating solutions that make a difference. When I'm not coding, you'll find me watching sci-fi movies or learning about space technology! 🚀";
    }
    
    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('languages')) {
      return "I work with a variety of technologies! My main programming languages are Python, C++, Java, JavaScript, and Dart. I'm really comfortable with React, Node.js, Next.js for web development, and I use Firebase, MySQL, and MongoDB for databases. I'm also passionate about AI/ML and have hands-on experience with Flutter for mobile development! What specific technology interests you? 💻";
    }
    
    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('built') || message.includes('portfolio')) {
      return "I've worked on some exciting projects! My favorites include ReadGro (a learning platform), an AI Virtual Assistant built with Python, real-time chat applications with React and Firebase, and various Flutter mobile apps. I've also developed college management systems and freelancing platforms. Each project taught me something new! Which one would you like to hear more about? 🎯";
    }
    
    // Education
    if (message.includes('education') || message.includes('study') || message.includes('college') || message.includes('degree') || message.includes('university')) {
      return "I'm currently pursuing my B.Tech in Computer Science and Engineering with AI & ML specialization at Anil Neerukonda Institute of Technology and Sciences. Before this, I completed my Diploma in Computer Engineering from Government Polytechnic College, Rebaka. The journey has been amazing so far! 🎓";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('intern') || message.includes('job') || message.includes('work experience')) {
      return "I had an incredible 6-month internship as a Web Developer at VBS Business Solutions! It was such a learning experience - I worked on developing and optimizing web applications, improved UI/UX designs, and really honed my teamwork and project management skills. The hands-on experience in full-stack development was invaluable! 💼";
    }
    
    // Contact/Hire
    if (message.includes('contact') || message.includes('hire') || message.includes('email') || message.includes('reach') || message.includes('collaborate')) {
      return "I'd love to connect with you! You can reach me through the contact form on this website, or find me on LinkedIn and GitHub. I'm always excited about new opportunities and interesting collaborations. Let's build something amazing together! 🤝";
    }
    
    // AI/ML specific
    if (message.includes('ai') || message.includes('machine learning') || message.includes('ml') || message.includes('artificial intelligence')) {
      return "AI & ML is my passion! 🤖 I'm specializing in it during my B.Tech and have worked on projects like linear regression for house price prediction, heart disease classification, and face recognition systems. I built an AI Virtual Assistant during my diploma too! The field is evolving so fast and I love being part of it!";
    }
    
    // Hobbies/Personal
    if (message.includes('hobby') || message.includes('hobbies') || message.includes('interest') || message.includes('free time') || message.includes('personal')) {
      return "When I'm not coding, I'm probably watching sci-fi movies (I'm a huge space nerd! 🌌), reading about rockets and aerospace technology, or just enjoying music. I also love spending time in nature and taking care of farm animals - it keeps me grounded and inspired!";
    }
    
    // Specific technologies
    if (message.includes('react') || message.includes('javascript') || message.includes('node')) {
      return "React is one of my favorite frameworks! I've built several applications with it, including real-time chat apps and community platforms. Combined with Node.js for the backend, it's such a powerful stack. The component-based architecture makes development so much more enjoyable! ⚛️";
    }
    
    if (message.includes('python')) {
      return "Python is my go-to language for AI/ML projects! I used it to build my AI Virtual Assistant and implement various machine learning algorithms. It's so versatile - from web scraping to data analysis to building neural networks. What Python projects are you working on? 🐍";
    }
    
    if (message.includes('flutter') || message.includes('mobile') || message.includes('app')) {
      return "Flutter is amazing for mobile development! I've built apps like OTP generators and To-Do list applications with it. The fact that you can write once and deploy to both Android and iOS is incredible. Plus, integrating it with Node.js backends makes for really robust mobile solutions! 📱";
    }
    
    // Location/Availability
    if (message.includes('available') || message.includes('location') || message.includes('where') || message.includes('from')) {
      return "I'm based in India and I'm definitely available for both remote and local opportunities! I love working with teams from different parts of the world - it brings such diverse perspectives to projects. Are you working on something interesting? 🌍";
    }
    
    // Learning/Growth
    if (message.includes('learn') || message.includes('future') || message.includes('goals') || message.includes('next')) {
      return "I'm always learning! Currently diving deeper into advanced AI/ML concepts, exploring cloud technologies, and keeping up with the latest in web development. My goal is to work on projects that can make a real impact on people's lives. What new technologies are you excited about? 📚";
    }
    
    // Fun questions
    if (message.includes('favorite') || message.includes('best') || message.includes('like most')) {
      return "That's a tough one! I'd say my favorite project so far was the AI Virtual Assistant because it combined so many different technologies and really challenged me. But honestly, I love every project I work on because each one teaches me something new! What's your favorite type of project to work on? 🤔";
    }
    
    // Thank you
    if (message.includes('thank') || message.includes('thanks') || message.includes('awesome') || message.includes('great')) {
      return "You're so welcome! I really appreciate you taking the time to chat with me. It means a lot! If you have any other questions or just want to talk tech, I'm here. Thanks for checking out my portfolio! 😊";
    }
    
    // Advice/Tips
    if (message.includes('advice') || message.includes('tip') || message.includes('suggest') || message.includes('recommend')) {
      return "My best advice? Never stop building! Whether it's a small script or a full-scale application, every project teaches you something valuable. Also, don't be afraid to experiment with new technologies - some of my best learning experiences came from stepping out of my comfort zone. What are you working on currently? 💡";
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! I'd love to help you with that. Could you tell me more about what specifically you'd like to know? I'm here to chat about anything related to my work, skills, or experience! 🤗",
      "I'm not sure I caught that exactly, but I'm here to help! Feel free to ask me about my projects, technical skills, education, or anything else you're curious about. What would you like to know? 😊",
      "Hmm, let me think about that! I'm always happy to discuss my development journey, the technologies I work with, or any projects that might interest you. What aspect would you like to explore? 🚀",
      "Great question! I love chatting about technology, development, and my projects. Is there something specific about my background or work that you'd like to know more about? I'm all ears! 👂"
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

    // Simulate more natural typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
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
              <span className="font-semibold">Chat with Abhiram</span>
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
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      AK
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
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    AK
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
                placeholder="Type your message..."
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
