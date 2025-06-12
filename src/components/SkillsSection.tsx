
import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 95 },
      { name: "Vue.js", level: 75 }
      
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Python", level: 70 },
      { name: "Django", level: 68 }
    ],
    Tools: [
      { name: "Git", level: 90 },
      { name: "Git hubr", level: 60 }
    ]
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-2xl mx-auto space-y-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div 
              key={skill.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-space font-medium text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000 ease-out animate-fade-in"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1 + 0.5}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
