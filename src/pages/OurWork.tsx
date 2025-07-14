import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "Firebase", "Redux", "Biometrics"],
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointments, and medical records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    category: "Web Development"
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Prisma", "AWS"],
    category: "Web Development"
  },
  {
    id: 5,
    title: "Inventory Management App",
    description: "Smart inventory tracking system with barcode scanning and automated reordering.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Laravel", "MySQL", "QR Code"],
    category: "Mobile Development"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with course creation, video streaming, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Express.js", "MongoDB", "Video.js"],
    category: "Web Development"
  }
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              Showcasing our latest projects and success stories
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-soft hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with our proven development expertise.
            </p>
            <Button variant="premium" size="lg" asChild>
              <Link to="/#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;