
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ClientReviewsSection from '@/components/ClientReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground relative overflow-hidden dark">
//       {/* Enhanced Background with Circuit Animation */}
//       <div className="fixed inset-0 pointer-events-none">
//         {/* Dark gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/30"></div>
//         
//         {/* Central Circuit Hub - Exact match to reference */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           {/* Central Black Chip/Processor */}
//           <div className="w-16 h-16 bg-black border border-gray-600 rounded-sm relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
//             {/* Small connection points on the chip */}
//             <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
//             <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//             <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//             <div className="absolute bottom-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
//           </div>
//           
//           {/* Main Horizontal Circuit Lines */}
//           <div className="absolute top-1/2 left-20 w-48 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-right_3s_ease-in-out_infinite] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
//           <div className="absolute top-1/2 right-20 w-48 h-0.5 bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-left_3s_ease-in-out_infinite] shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDelay: '1s' }}></div>
//           
//           {/* Secondary Horizontal Lines */}
//           <div className="absolute top-1/2 translate-y-4 left-20 w-40 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 animate-[circuit-flow-right_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.6)]" style={{ animationDelay: '0.5s' }}></div>
//           <div className="absolute top-1/2 -translate-y-4 left-20 w-40 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 animate-[circuit-flow-right_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(251,146,60,0.6)]" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute top-1/2 translate-y-4 right-20 w-40 h-0.5 bg-gradient-to-l from-green-400 to-purple-400 animate-[circuit-flow-left_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.6)]" style={{ animationDelay: '1.5s' }}></div>
//           <div className="absolute top-1/2 -translate-y-4 right-20 w-40 h-0.5 bg-gradient-to-l from-orange-400 to-pink-400 animate-[circuit-flow-left_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(251,146,60,0.6)]" style={{ animationDelay: '2.5s' }}></div>
//           
//           {/* Vertical Circuit Lines */}
//           <div className="absolute left-1/2 top-20 w-0.5 h-48 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-down_3s_ease-in-out_infinite] shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDelay: '0.5s' }}></div>
//           <div className="absolute left-1/2 bottom-20 w-0.5 h-48 bg-gradient-to-t from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-up_3s_ease-in-out_infinite] shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDelay: '1.5s' }}></div>
//           
//           {/* Data Transfer Nodes */}
//           <div className="absolute top-1/2 left-32 w-2 h-2 bg-cyan-400 rounded-full animate-[data-pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
//           <div className="absolute top-1/2 right-32 w-2 h-2 bg-purple-400 rounded-full animate-[data-pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(168,85,247,1)]" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute left-1/2 top-32 w-2 h-2 bg-green-400 rounded-full animate-[data-pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(74,222,128,1)]" style={{ animationDelay: '0.5s' }}></div>
//           <div className="absolute left-1/2 bottom-32 w-2 h-2 bg-orange-400 rounded-full animate-[data-pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(251,146,60,1)]" style={{ animationDelay: '1.5s' }}></div>
//           
//           {/* Circuit Branches */}
//           <div className="absolute top-1/2 left-44 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform rotate-45 animate-[electric-current_2s_linear_infinite] shadow-[0_0_6px_rgba(34,211,238,0.8)]"></div>
//           <div className="absolute top-1/2 left-44 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform -rotate-45 animate-[electric-current_2s_linear_infinite] shadow-[0_0_6px_rgba(34,211,238,0.8)]" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-1/2 right-44 w-16 h-0.5 bg-gradient-to-l from-purple-400 to-transparent transform rotate-45 animate-[electric-current_2s_linear_infinite] shadow-[0_0_6px_rgba(168,85,247,0.8)]" style={{ animationDelay: '0.5s' }}></div>
//           <div className="absolute top-1/2 right-44 w-16 h-0.5 bg-gradient-to-l from-purple-400 to-transparent transform -rotate-45 animate-[electric-current_2s_linear_infinite] shadow-[0_0_6px_rgba(168,85,247,0.8)]" style={{ animationDelay: '1.5s' }}></div>
//         </div>
// 
//         {/* Floating Data Particles */}
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-[color-cycle-1_3s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
//           <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-[color-cycle-2_4s_ease-in-out_infinite] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-[color-cycle-1_3.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
//           <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-[color-cycle-2_2.5s_ease-in-out_infinite] shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
//         </div>
// 
//         {/* Animated Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30"></div>
//         
//         {/* Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/[0.02] to-purple-500/[0.02]"></div>
//       </div>
// 
//       {/* Content */}
//       <div className="relative z-10">
//         <Header />
//         <HeroSection />
//         <AboutSection />
//         <ExperiencesSection />
//         <ProjectsSection />
//         <SkillsSection />
//         <ClientReviewsSection />
//         <ContactSection />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// 
// export default Index;
// 
// 
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Neon background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Animated neon grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main neon title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
          <span className="neon-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome
          </span>
          <div className="absolute inset-0 neon-glow">
            <span className="text-cyan-400 opacity-50 blur-sm">Welcome</span>
          </div>
        </h1>
        
        {/* Subtitle with neon effect */}
        <p className="text-xl md:text-2xl text-cyan-300 mb-8 neon-text-small relative">
          <span className="relative z-10">To Your Amazing Neon App</span>
          <div className="absolute inset-0 text-cyan-400 opacity-30 blur-sm">
            To Your Amazing Neon App
          </div>
        </p>
        
        {/* Neon button */}
        <button className="neon-button px-8 py-4 text-lg font-semibold rounded-lg border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 transition-all duration-300 relative overflow-hidden group">
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </button>
        
        {/* Floating neon orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <style jsx>{`
        .neon-text {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            0 0 20px #00ffff,
            0 0 35px #00ffff,
            0 0 40px #00ffff;
          animation: neon-flicker 2s infinite alternate;
        }
        
        .neon-text-small {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px #00ffff;
        }
        
        .neon-button {
          box-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            inset 0 0 15px rgba(0, 255, 255, 0.1);
          animation: neon-pulse 2s infinite;
        }
        
        .neon-button:hover {
          box-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            0 0 20px #00ffff,
            0 0 35px #00ffff,
            inset 0 0 15px rgba(0, 255, 255, 0.2);
        }
        
        @keyframes neon-flicker {
          0%, 100% {
            text-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              0 0 20px #00ffff,
              0 0 35px #00ffff,
              0 0 40px #00ffff;
          }
          50% {
            text-shadow: 
              0 0 2px currentColor,
              0 0 5px currentColor,
              0 0 8px currentColor,
              0 0 12px #00ffff,
              0 0 18px #00ffff,
              0 0 25px #00ffff;
          }
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            box-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              inset 0 0 15px rgba(0, 255, 255, 0.1);
          }
          50% {
            box-shadow: 
              0 0 2px currentColor,
              0 0 5px currentColor,
              0 0 8px currentColor,
              inset 0 0 8px rgba(0, 255, 255, 0.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;