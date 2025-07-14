import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver pixel-perfect solutions with attention to every detail."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technologies and creative solutions for modern challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality software that stands the test of time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">W3 Software Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating 
            exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              W3 Software Solutions has grown from a small startup to a trusted partner for businesses 
              of all sizes.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that great software is not just about clean code – it's about understanding 
              your business needs, your users, and creating solutions that make a real impact.
            </p>
            <Button variant="hero">
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  Why Choose W3?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Expert team with diverse technical skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Agile development process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Transparent communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Post-launch support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Competitive pricing with no hidden costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center group hover:shadow-medium transition-all duration-300 transform hover:scale-105 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary-light rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;