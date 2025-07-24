import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white animate-fade-in-up">
          {/* Main content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Neeraj <span className="text-gradient bg-gradient-to-r from-white to-purple-200 bg-clip-text">Gandu</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2 font-light">
              AIML engineer
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-bounce px-8"
            >
              Explore My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-3"
              onClick={() => window.open('https://github.com/Neeraj255', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-3"
              onClick={() => window.open('https://www.linkedin.com/in/neeraj-gandu-04b807290/', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;