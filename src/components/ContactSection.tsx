
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
          <p className="text-primary font-medium">
            💼 Available for freelance projects
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="write your name..."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="write your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Hello, I'd like to talk about..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href="https://github.com/abdullah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/abdullah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="mailto:abdullah@example.com" 
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
