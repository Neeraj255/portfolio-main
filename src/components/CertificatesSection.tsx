import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive AI engineering program covering machine learning, deep learning, and AI application development.",
      skills: ["AI Engineering", "Machine Learning", "Deep Learning", "TensorFlow"],
      link: "#",
      image: "🤖"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMORGAN Chase&CO",
      date: "2024", 
      description: "Hands-on software engineering experience simulating real-world financial technology projects.",
      skills: ["Software Engineering", "Financial Technology", "Java", "React"],
      link: "#",
      image: "💼"
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      issuer: "IBM",
      date: "2023",
      description: "Fundamentals of computer vision, image processing techniques, and practical applications in AI.",
      skills: ["Computer Vision", "Image Processing", "OpenCV", "Python"],
      link: "#",
      image: "👁️"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2023",
      description: "Comprehensive machine learning course using Python for data analysis and predictive modeling.",
      skills: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      link: "#",
      image: "🐍"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "2023",
      description: "Foundational concepts of artificial intelligence, AI applications, and ethical considerations.",
      skills: ["Artificial Intelligence", "AI Ethics", "Neural Networks", "Data Science"],
      link: "#",
      image: "🧠"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that demonstrate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="group shadow-card hover:shadow-elegant transition-smooth animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{cert.image}</div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {cert.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <Award className="h-4 w-4" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Button */}
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 text-primary mb-4">
                <Award className="h-6 w-6" />
                <span className="text-xl font-semibold">Continuous Learning</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe in staying current with industry trends and continuously expanding my skill set. 
                These certifications represent my commitment to professional growth and excellence in technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;