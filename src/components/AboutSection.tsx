
import { Code, User, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive websites and web applications with modern frameworks."
    },
    {
      icon: User,
      title: "UI/UX Design", 
      description: "Designing intuitive user interfaces and seamless user experiences."
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Leading projects from conception to completion with agile methodologies."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-space font-semibold mb-6">
            Passionate Web Developer & Tech Creator
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With over 2 years of experience in web development, I specialize in 
              creating responsive, accessible, and performant web applications 
              using modern technologies.
            </p>
            <p>
              I'm passionate about creating elegant solutions to complex problems, 
              and I'm constantly learning new technologies and techniques to stay 
              at the forefront of the ever-evolving web landscape.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-space font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
