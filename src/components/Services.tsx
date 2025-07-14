import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Paintbrush, 
  Rocket,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with modern technologies. Responsive, fast, and optimized for search engines.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions to streamline your business processes and boost productivity.",
      features: ["Custom Logic", "API Integration", "Scalable Architecture", "Cloud Ready"]
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust backend systems with secure APIs, database management, and cloud infrastructure.",
      features: ["Secure APIs", "Database Design", "Cloud Hosting", "Real-time Features"]
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions for your business.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Complete digital transformation strategies to help your business thrive in the digital age.",
      features: ["Market Analysis", "Tech Strategy", "Growth Planning", "Digital Marketing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive software solutions 
            that drive your business forward in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-medium transition-all duration-300 transform hover:scale-105 bg-gradient-card border-border animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-light rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group/btn w-full justify-between">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;