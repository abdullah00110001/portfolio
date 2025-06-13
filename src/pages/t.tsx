
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ClientReviewsSection from '@/components/ClientReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Enhanced Background with Moving Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] animate-pulse"></div>
        
        {/* Moving Particles - Arctic Style */}
        <div className="absolute inset-0">
          {/* Large floating particles */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-[float_8s_ease-in-out_infinite] shadow-[0_0_10px_rgba(59,130,246,0.3)]" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300/25 rounded-full blur-sm animate-[float_12s_ease-in-out_infinite] shadow-[0_0_15px_rgba(34,211,238,0.2)]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-sky-400/35 rounded-full blur-sm animate-[float_10s_ease-in-out_infinite] shadow-[0_0_8px_rgba(14,165,233,0.4)]" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-blue-300/20 rounded-full blur-sm animate-[float_14s_ease-in-out_infinite] shadow-[0_0_12px_rgba(59,130,246,0.25)]" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-1/6 left-3/4 w-1 h-1 bg-cyan-400/40 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite] shadow-[0_0_6px_rgba(34,211,238,0.5)]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-3.5 h-3.5 bg-sky-300/15 rounded-full blur-sm animate-[float_16s_ease-in-out_infinite] shadow-[0_0_18px_rgba(14,165,233,0.2)]" style={{ animationDelay: '3s' }}></div>
          
          {/* Small particles */}
          <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-blue-500/25 rounded-full animate-[drift_20s_linear_infinite] shadow-[0_0_4px_rgba(59,130,246,0.3)]" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/5 left-1/4 w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-[drift_25s_linear_infinite] shadow-[0_0_3px_rgba(34,211,238,0.4)]" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-1/5 right-1/2 w-1.5 h-1.5 bg-sky-400/20 rounded-full animate-[drift_18s_linear_infinite] shadow-[0_0_5px_rgba(14,165,233,0.25)]" style={{ animationDelay: '8s' }}></div>
          <div className="absolute top-2/5 left-1/6 w-0.5 h-0.5 bg-blue-400/35 rounded-full animate-[drift_22s_linear_infinite] shadow-[0_0_2px_rgba(59,130,246,0.4)]" style={{ animationDelay: '12s' }}></div>
          <div className="absolute bottom-2/5 right-1/5 w-1 h-1 bg-cyan-300/25 rounded-full animate-[drift_15s_linear_infinite] shadow-[0_0_4px_rgba(34,211,238,0.3)]" style={{ animationDelay: '7s' }}></div>
          
          {/* Micro particles */}
          <div className="absolute top-1/8 left-1/2 w-0.5 h-0.5 bg-blue-300/40 rounded-full animate-[twinkle_4s_ease-in-out_infinite] shadow-[0_0_2px_rgba(59,130,246,0.5)]" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-7/8 right-1/4 w-0.5 h-0.5 bg-cyan-400/35 rounded-full animate-[twinkle_6s_ease-in-out_infinite] shadow-[0_0_2px_rgba(34,211,238,0.4)]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/8 w-0.5 h-0.5 bg-sky-400/30 rounded-full animate-[twinkle_5s_ease-in-out_infinite] shadow-[0_0_2px_rgba(14,165,233,0.35)]" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/8 left-1/8 w-0.5 h-0.5 bg-blue-400/25 rounded-full animate-[twinkle_7s_ease-in-out_infinite] shadow-[0_0_2px_rgba(59,130,246,0.3)]" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* NEW: Neon Circuit/Tech Animation Effects */}
        <div className="absolute inset-0">
          {/* Central Tech Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Central Core */}
            // <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm animate-[circuit-pulse_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(59,130,246,0.6)]"></div>
            
            {/* Horizontal Circuit Lines */}
            <div className="absolute top-1/2 left-2 w-32 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-right_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.6)]" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/2 right-2 w-32 h-0.5 bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-left_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.6)]" style={{ animationDelay: '1s' }}></div>
            
            {/* Vertical Circuit Lines */}
            <div className="absolute left-1/2 top-2 w-0.5 h-32 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-down_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.6)]" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute left-1/2 bottom-2 w-0.5 h-32 bg-gradient-to-t from-cyan-400 via-blue-500 to-purple-500 animate-[circuit-flow-up_4s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.6)]" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Diagonal Circuit Lines */}
            <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 transform rotate-45 origin-left animate-[circuit-diagonal_5s_ease-in-out_infinite] shadow-[0_0_6px_rgba(34,211,238,0.5)]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-blue-500 transform -rotate-45 origin-right animate-[circuit-diagonal_5s_ease-in-out_infinite] shadow-[0_0_6px_rgba(34,211,238,0.5)]" style={{ animationDelay: '2.5s' }}></div>
          </div>

          {/* Secondary Tech Nodes */}
          <div className="absolute top-1/4 left-1/4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-[node-pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
            <div className="absolute top-1 left-1 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-[mini-circuit_3s_linear_infinite] shadow-[0_0_4px_rgba(168,85,247,0.5)]"></div>
            <div className="absolute top-1 left-1 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-transparent animate-[mini-circuit_3s_linear_infinite] shadow-[0_0_4px_rgba(168,85,247,0.5)]" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="absolute top-3/4 right-1/4">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-[node-pulse_2.5s_ease-in-out_infinite] shadow-[0_0_10px_rgba(251,146,60,0.7)]"></div>
            <div className="absolute top-1 right-1 w-16 h-0.5 bg-gradient-to-l from-orange-400 to-transparent animate-[mini-circuit_3.5s_linear_infinite] shadow-[0_0_4px_rgba(251,146,60,0.5)]"></div>
            <div className="absolute top-1 right-1 w-0.5 h-16 bg-gradient-to-t from-orange-400 to-transparent animate-[mini-circuit_3.5s_linear_infinite] shadow-[0_0_4px_rgba(251,146,60,0.5)]" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="absolute top-1/6 right-1/3">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-[node-pulse_1.8s_ease-in-out_infinite] shadow-[0_0_8px_rgba(74,222,128,0.7)]"></div>
            <div className="absolute top-0.5 right-0.5 w-12 h-0.5 bg-gradient-to-l from-green-400 to-transparent animate-[mini-circuit_2.8s_linear_infinite] shadow-[0_0_3px_rgba(74,222,128,0.5)]"></div>
          </div>

          <div className="absolute bottom-1/6 left-1/3">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-[node-pulse_2.2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(244,114,182,0.7)]"></div>
            <div className="absolute bottom-0.5 left-0.5 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-[mini-circuit_3.2s_linear_infinite] shadow-[0_0_3px_rgba(244,114,182,0.5)]"></div>
          </div>

          {/* Tech Grid Network */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/5 left-1/5 w-3/5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[tech-scan_6s_linear_infinite] shadow-[0_0_4px_rgba(34,211,238,0.4)]"></div>
            <div className="absolute top-2/5 left-1/5 w-3/5 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[tech-scan_7s_linear_infinite] shadow-[0_0_4px_rgba(59,130,246,0.4)]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-3/5 left-1/5 w-3/5 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[tech-scan_8s_linear_infinite] shadow-[0_0_4px_rgba(168,85,247,0.4)]" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-4/5 left-1/5 w-3/5 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-[tech-scan_9s_linear_infinite] shadow-[0_0_4px_rgba(244,114,182,0.4)]" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Amazing Sky Effects - Light Mode */}
        <div className="absolute inset-0 opacity-40 dark:opacity-0">
          {/* Sky Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-blue-50/60 to-indigo-100/70"></div>
          
          {/* Floating Clouds with Neon Glow */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/6 w-96 h-32 bg-gradient-to-r from-white/40 via-sky-200/50 to-cyan-100/40 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite] shadow-[0_0_50px_rgba(14,165,233,0.3)]" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-28 bg-gradient-to-l from-blue-100/50 via-sky-100/60 to-white/30 rounded-full blur-2xl animate-[pulse_10s_ease-in-out_infinite] shadow-[0_0_40px_rgba(59,130,246,0.2)]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 left-1/3 w-72 h-24 bg-gradient-to-r from-cyan-100/40 via-blue-50/50 to-indigo-100/40 rounded-full blur-2xl animate-[pulse_12s_ease-in-out_infinite] shadow-[0_0_35px_rgba(6,182,212,0.25)]" style={{ animationDelay: '4s' }}></div>
          </div>
          
          {/* Neon Sky Rays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-300/60 via-transparent to-transparent blur-sm animate-[pulse_6s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,211,238,0.4)]" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-300/50 via-transparent to-transparent blur-sm animate-[pulse_8s_ease-in-out_infinite] shadow-[0_0_25px_rgba(59,130,246,0.3)]" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-sky-300/55 via-transparent to-transparent blur-sm animate-[pulse_10s_ease-in-out_infinite] shadow-[0_0_18px_rgba(14,165,233,0.35)]" style={{ animationDelay: '5s' }}></div>
          </div>
          
          {/* Floating Sky Orbs with Intense Neon Glow */}
          <div className="absolute top-1/6 right-1/5 w-64 h-64 bg-gradient-to-br from-cyan-200/50 via-sky-300/40 to-blue-200/50 rounded-full blur-3xl animate-pulse shadow-[0_0_80px_rgba(14,165,233,0.4)]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-gradient-to-tr from-blue-200/60 via-indigo-200/45 to-cyan-100/50 rounded-full blur-3xl animate-pulse shadow-[0_0_60px_rgba(59,130,246,0.35)]" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-56 h-56 bg-gradient-to-bl from-sky-300/45 via-cyan-200/50 to-blue-100/40 rounded-full blur-3xl animate-pulse shadow-[0_0_70px_rgba(6,182,212,0.3)]" style={{ animationDelay: '5s' }}></div>
        </div>
        
        {/* Ocean-like Flowing Background Animation - Dark Mode */}
        <div className="absolute inset-0 opacity-0 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/10 via-blue-500/8 to-purple-600/12 animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-gradient-to-tr from-teal-400/8 via-blue-600/10 to-indigo-500/8 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite] opacity-60" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-purple-500/8 via-cyan-400/8 to-blue-500/8 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite] opacity-40" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/6 via-purple-400/8 to-cyan-500/6 rounded-full blur-3xl animate-[pulse_14s_ease-in-out_infinite] opacity-50" style={{ animationDelay: '6s' }}></div>
        </div>
        
        {/* Enhanced Floating Orbs for Dark Mode */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl animate-pulse opacity-0 dark:opacity-100"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/8 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse opacity-0 dark:opacity-100" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-blue-500/8 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse opacity-0 dark:opacity-100" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-purple-500/[0.03] dark:from-primary/[0.05] dark:via-transparent dark:to-purple-500/[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/[0.02] via-transparent to-blue-500/[0.02] dark:from-cyan-400/[0.03] dark:via-transparent dark:to-blue-500/[0.03]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <SkillsSection />
        <ClientReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};
export default Index;