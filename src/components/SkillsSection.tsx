import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C", level: 80, icon: "⚙️" },
        { name: "Java", level: 75, icon: "☕" }
      ]
    },
    {
      title: "Web Technologies", 
      skills: [
        { name: "HTML", level: 90, icon: "🌐" },
        { name: "CSS", level: 80, icon: "🎨" },
        { name: "MySQL", level: 75, icon: "🗄️" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "Git/GitHub", level: 70, icon: "🔧" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "Automation", level: 50, icon: "🤖" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="shadow-card hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2"
                      style={{
                        transition: `all 1s ease-out ${(categoryIndex * 0.1 + skillIndex * 0.1)}s`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;