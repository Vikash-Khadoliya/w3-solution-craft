import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Paintbrush, 
  Rocket,
  ArrowRight,
  Zap,
  Shield,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive results and engage your audience across all devices.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Performance First"],
      color: "from-blue-500 to-cyan-500",
      badge: "Popular"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS & Android applications with seamless user experiences and robust functionality.",
      features: ["React Native", "Cross-Platform", "App Store Ready", "Push Notifications"],
      color: "from-purple-500 to-pink-500",
      badge: "Trending"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Scalable backend solutions with secure APIs, real-time features, and cloud infrastructure.",
      features: ["Node.js & Python", "PostgreSQL", "RESTful APIs", "Cloud Deployment"],
      color: "from-green-500 to-emerald-500",
      badge: "Essential"
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers with modern aesthetics.",
      features: ["Figma Design", "User Research", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-red-500",
      badge: "Creative"
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Secure deployment pipelines, monitoring, and infrastructure management for your applications.",
      features: ["Docker & K8s", "CI/CD Pipelines", "AWS/GCP", "Security Audits"],
      color: "from-indigo-500 to-purple-600",
      badge: "Secure"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic technology consulting to help your business make informed decisions and scale effectively.",
      features: ["Tech Strategy", "Architecture Review", "Team Training", "Code Audits"],
      color: "from-teal-500 to-blue-600",
      badge: "Expert"
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What We <span className="bg-gradient-primary bg-clip-text text-transparent">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From innovative web applications to scalable mobile solutions, we craft digital experiences 
              that transform ideas into successful businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 transform hover:scale-105 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {service.badge}
                  </Badge>
                </div>
                
                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn w-full justify-between border border-border/50 hover:border-primary/50 hover:bg-primary/5">
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="animate-glow">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="group">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Technologies We <span className="bg-gradient-primary bg-clip-text text-transparent">Master</span>
            </h3>
            <p className="text-muted-foreground">Cutting-edge tools and frameworks that power our solutions</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll-right space-x-8 whitespace-nowrap">
              {/* First set of technologies */}
              <div className="flex space-x-8 animate-scroll-right">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Next.js", icon: "▲" },
                  { name: "TypeScript", icon: "TS" },
                  { name: "Tailwind CSS", icon: "🎨" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Firebase", icon: "🔥" },
                  { name: "Supabase", icon: "⚡" },
                  { name: "Vercel", icon: "◢" }
                ].map((tech, index) => (
                  <div 
                    key={`first-${tech.name}`}
                    className="flex flex-col items-center min-w-[120px] p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 animate-scroll-right">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Next.js", icon: "▲" },
                  { name: "TypeScript", icon: "TS" },
                  { name: "Tailwind CSS", icon: "🎨" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Firebase", icon: "🔥" },
                  { name: "Supabase", icon: "⚡" },
                  { name: "Vercel", icon: "◢" }
                ].map((tech, index) => (
                  <div 
                    key={`second-${tech.name}`}
                    className="flex flex-col items-center min-w-[120px] p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;