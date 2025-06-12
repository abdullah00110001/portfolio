
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Amezing portfolio website ",
      description: "A beautiful portfolio website.",
      image: "/img/w1.png",
      technologies: ["Html","Css","Js"],
      category: "Web Application"
    },
    {
      id: 2,
      title: "Landing page ",
      description: "Modern e-commerce solution with payment integration.",
      image: "/img/w2.png",
     technologies: ["Html","Css","Js"],
      category: "Landing page"
    }
//     {
//       id: 3,
//       title: "Task Management App",
//       description: "Collaborative task management with real-time updates.",
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//       technologies: ["React", "Node.js", "MongoDB"],
//       category: "Web Application"
//     }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted 
            with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl border"
                  />
//                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center space-x-4">
//                     <Button size="sm" className="bg-primary hover:bg-primary/90">
//                       <ArrowUpRight className="w-4 h-4 mr-2" />
//                       Demo
//                     </Button>
//                     <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
//                       <Github className="w-4 h-4 mr-2" />
//                       Code
//                     </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                  {project.category}
                </div>
                <h3 className="text-2xl font-space font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               //  <div className="flex space-x-4">
//                   <Button size="sm" className="bg-primary hover:bg-primary/90">
//                     <ArrowUpRight className="w-4 h-4 mr-2" />
//                     View Project
//                   </Button>
//                   <Button size="sm" variant="outline">
//                     <Github className="w-4 h-4 mr-2" />
//                     Source Code
//                   </Button>
//                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
