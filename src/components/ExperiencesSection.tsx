
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    company: "Sulphuric Bench",
    description: "Assisted in the development of a web-based platform, enhancing interactivity and user experience.",
    icon: "/img/sbl.png",
    gradient: "from-orange-400 via-pink-500 to-purple-600"
  }
 //  {
//     id: 2,
//     title: "Mobile App Developer",
//     company: "JSM Tech",
//     description: "Designed and developed mobile applications for both iOS & Android platforms using React Native.",
//     icon: "📱",
//     // gradient: "from-purple-500 via-blue-500 to-cyan-400"
//   }
];

const ExperiencesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section className="py-24 px-6 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">work experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {displayedExperiences.map((experience) => (
            <Card key={experience.id} className="group bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center text-2xl shadow-lg border border-white/20`}>
                    {experience.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More/Less Button */}
        {experiences.length > 4 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperiencesSection;
