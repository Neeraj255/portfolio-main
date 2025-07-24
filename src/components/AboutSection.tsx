import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const highlights = [
    "5+ Years Experience",
    "Full Stack Development", 
    "Modern Technologies",
    "Problem Solver"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <Card className="overflow-hidden shadow-elegant max-w-md">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-80 h-80 bg-muted-foreground/10 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello! I'm Neeraj</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a 3rd-year Computer Science (AI & ML) student at GITAM University. 
                  I'm passionate about solving real-world problems with technology and constantly 
                  pushing my boundaries in the world of Artificial Intelligence and Machine Learning.
                </p>
                <p>
                  I've gained hands-on experience in AI, ranging from full-stack development to 
                  core AI/ML tools. I'm also a strong believer in collaboration — whether it's 
                  working in a team or leading one, I thrive in environments where innovation 
                  and communication come together.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;