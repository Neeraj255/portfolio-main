import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:neerajneeru388@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your email client will open with the message pre-filled.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neerajneeru388@gmail.com",
      href: "mailto:neerajneeru388@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989169881",
      href: "tel:+917989169881"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India, Vizag",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Neeraj255", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/neeraj-gandu-04b807290/", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full shadow-elegant" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;