import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "FitTrack",
      description: "A comprehensive fitness website that calculates daily protein intake requirements, provides personalized diet plans, and tracks workout progress for optimal health management.",
      image: "💪",
      techStack: ["HTML", "CSS", "JavaScript", "Python"],
      features: ["Protein Calculator", "Diet Planning", "Workout Tracking", "Progress Analytics"],
      category: "Web Development"
    },
    {
      title: "Stock Prediction",
      description: "A machine learning model that analyzes historical stock data and market trends to predict future stock values with high accuracy using advanced algorithms.",
      image: "📈",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      features: ["Data Analysis", "Trend Prediction", "Model Training", "Performance Metrics"],
      category: "Machine Learning"
    },
    {
      title: "Car Price Prediction",
      description: "An intelligent ML model that predicts car prices based on various features like brand, model, year, mileage, and condition using regression algorithms.",
      image: "🚗",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      features: ["Feature Analysis", "Price Estimation", "Model Validation", "Data Visualization"],
      category: "Machine Learning"
    },
    {
      title: "Heart Disease Detector",
      description: "A medical prediction model that analyzes patient health parameters to detect the likelihood of heart disease, helping in early diagnosis and prevention.",
      image: "❤️",
      techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      features: ["Health Analysis", "Risk Assessment", "Diagnostic Support", "Statistical Insights"],
      category: "AI/ML"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "SaaS", "AI/ML", "Data Science"];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group shadow-card hover:shadow-elegant transition-smooth animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-5xl">{project.image}</div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-background hover:bg-muted transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Features</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These are just a few highlights of my work. Check out my GitHub profile 
                for more projects, contributions, and code samples.
              </p>
              <Button className="shadow-elegant">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;