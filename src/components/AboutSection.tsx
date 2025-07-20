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
                  I'm a passionate full-stack developer with over 5 years of experience 
                  in creating beautiful, functional, and user-centered digital experiences. 
                  My journey in tech started with a curiosity about how websites work, 
                  and it has evolved into a deep love for crafting solutions that make a difference.
                </p>
                <p>
                  I specialize in modern web technologies including React, Node.js, TypeScript, 
                  and cloud platforms. I believe in writing clean, maintainable code and 
                  creating intuitive user interfaces that solve real problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while reading about the latest developments in tech.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                  >
                    {highlight}
                  </Badge>
                ))}
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