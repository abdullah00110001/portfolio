
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
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

{/*
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 text-balance">
            Hi, I'm <span className="gradient-text">Abdullah</span>
          </h1>
*/}          
          
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 gradient-text">Assalamu alaikum</h1>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">  Hi</h2>
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">  I'm <span className="text-purple-400">    <TypewriterEffect 
           text="Abdullah" 
           delay={30}
           />
           </span>
           </h1>

          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
            I create stellar web experiences with modern technologies. Specializing in 
            full-stack web development, I build interfaces that are both beautiful and functional.
          </p>

          <p className="text-base text-primary font-medium mb-12">
            🚀 Full-time Freelancer Available
          </p>
          <a
  href="https://wa.me/8801996598924?text=Hello%2C%20write%20your%20message%20here"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mb-6"  // নিচে ফাঁকা রাখতে এই লাইন
>
  <Button 
    size="lg" 
    className="bg-[#25D366] hover:bg-[#1DA851] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#25D366]/40 hover:shadow-2xl border border-[#25D366]/20 hover:border-[#25D366]/40 relative group"
  >
    {/* Neon glow effect */}
    <div className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-xl group-hover:bg-[#25D366]/40 transition-all duration-300"></div>
    
    {/* WhatsApp icon and text */}
    <span className="relative z-10 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48a12.07 12.07 0 0 0-17.04 0 11.91 11.91 0 0 0-2.63 12.91l-1.37 5a1 1 0 0 0 1.21 1.22l5-1.37a11.92 11.92 0 0 0 12.91-2.63 12.07 12.07 0 0 0-.08-17.13zM12 21a9 9 0 0 1-4.65-1.26l-.33-.2-2.95.81.81-2.95-.21-.34A9 9 0 1 1 12 21zm5.13-6.87c-.28-.14-1.63-.8-1.88-.89s-.44-.14-.62.14-.72.89-.88 1.07-.32.21-.6.07a7.42 7.42 0 0 1-2.18-1.35 8.26 8.26 0 0 1-1.53-1.89c-.16-.28 0-.43.12-.58s.28-.32.42-.48a1.91 1.91 0 0 0 .28-.46.56.56 0 0 0 0-.5c-.14-.14-.62-1.51-.85-2.08s-.45-.48-.63-.49h-.53a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.2 5.26 5.26 0 0 0 1.1 2.6 12.56 12.56 0 0 0 5 4.45 5.86 5.86 0 0 0 3.5 1.1 3 3 0 0 0 2.12-.91 2.39 2.39 0 0 0 .55-1.74c-.06-.1-.25-.17-.53-.3z" />
      </svg>
      Contact with me 
    </span>
  </Button>
</a>


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
