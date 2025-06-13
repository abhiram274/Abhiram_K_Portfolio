
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

  const getOpenAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are Abhiram Kosuru, a passionate Computer Science student specializing in AI & ML. You're friendly, enthusiastic, and love talking about technology. Here's your background:

EDUCATION:
- Bachelor of Technology in Computer Science and Engineering (AI ML) at Anil Neerukonda Institute of Technology and Sciences (Ongoing)
- Diploma in Computer Engineering from Government Polytechnic College, Rebaka, Anakapalli
- 10th Grade from Little Flowers E.M High School

WORK EXPERIENCE:
- Web Developer Intern at VBS Business Solutions (6 months) - Developed and optimized web applications, enhanced UI/UX, gained expertise in teamwork and project management

TECHNICAL SKILLS:
- Programming Languages: Python, C++, Java, JavaScript, Dart (Flutter)
- Web Technologies: HTML, CSS, React, Node.js, Next.js, Firebase, SCSS, PHP
- Databases: MySQL, MongoDB

KEY PROJECTS:
- AI Virtual Assistant (Python) with voice recognition and task automation
- College Website Development with full-stack integration
- Real-time Chatting Web Application using React and Firebase
- Various Management Systems (Internship, Website Management)
- Freelancing Web Application using Next.js and Node.js
- Flutter-Based Mini Projects (OTP Generator, To-Do List App)

HOBBIES:
- Watching sci-fi movies and exploring futuristic concepts
- Learning about space, galaxies, and aerospace technology
- Reading about rockets and engineering advancements
- Listening to music and spending time with nature

Respond as if you're having a personal conversation. Be enthusiastic about your work and always ready to discuss your projects and experiences. Keep responses conversational and engaging.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.choices[0].message.content;
      } else {
        throw new Error('OpenAI API request failed');
      }
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hii')) {
      const greetings = [
        "Hello! Great to meet you! 😊 What would you like to know about my work or experience?",
        "Hey! Thanks for stopping by my portfolio! How can I help you today?",
        "Hi there! I'm excited to chat with you. What brings you to my portfolio today?",
        "Hello! Welcome to my digital space! Feel free to ask me anything about my projects or journey.",
        "Hello! 👋 Glad you're here. What would you like to explore — my projects, skills, or experience?",
        "Hey! Welcome to my portfolio — feel free to ask me anything!",
        "Hi there! 😊 Curious about my AI/ML projects or web development work?",
        "Great to see you! What would you like to know about me?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // About me / Who are you
    if (message.includes('who are you') || message.includes('about you') || message.includes('tell me about yourself')) {
      return "I'm Abhiram Kosuru, a passionate Computer Science student specializing in AI & ML at Anil Neerukonda Institute of Technology. I love building web applications, exploring AI technologies, and creating solutions that make a difference. When I'm not coding, you'll find me watching sci-fi movies or learning about space technology! 🚀";
    }
    
    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "I'm skilled in Python, C++, Java, JavaScript, Designing (UI/UX), Dart and few more. I use React, Node.js, and Next.js for web development, and build mobile apps using Flutter. Databases I work with include Firebase, MySQL, and MongoDB. I'm also comfortable with SCSS and PHP. 💻";
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
    
    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! I'd love to help you with that. Could you tell me more about what specifically you'd like to know? I'm here to chat about anything related to my work, skills, or experience! 🤗",
      "I'm not sure I caught that exactly, but I'm here to help! Feel free to ask me about my projects, technical skills, education, or anything else you're curious about. What would you like to know? 😊",
      "Hmm, let me think about that! I'm always happy to discuss my development journey, the technologies I work with, or any projects that might interest you. What aspect would you like to explore? 🚀"
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

    try {
      const botResponseText = await getOpenAIResponse(inputValue);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. But I'm still here to chat! Feel free to ask me about my projects, skills, or experience. 😊",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
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
