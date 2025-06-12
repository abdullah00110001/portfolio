
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center">
        <div className="animate-fade-in-up">


          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 text-balance">
            Hi, I'm <span className="gradient-text">Abdullah</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
            I create stellar web experiences with modern technologies. Specializing in 
            full-stack web development, I build interfaces that are both beautiful and functional.
          </p>

          <p className="text-base text-primary font-medium mb-12">
            🚀 Full-time Freelancer Available
          </p>

          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25 hover:shadow-2xl border border-primary/20 hover:border-primary/40 relative group"
          >
            {/* Neon glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-300"></div>
            <span className="relative z-10">View My Work</span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-sm text-muted-foreground mb-2">Scroll</div>
          <ArrowDown className="w-4 h-4 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
