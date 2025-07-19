import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  HeadphonesIcon,
  CheckCircle 
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed discussions.",
    duration: "1-2 days",
    deliverables: ["Project Scope", "Requirements Document", "Timeline"]
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our team creates a comprehensive strategy and technical architecture tailored to your specific needs.",
    duration: "2-3 days",
    deliverables: ["Technical Specification", "Design Mockups", "Project Plan"]
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your solution using cutting-edge technologies and best practices, keeping you updated throughout.",
    duration: "2-8 weeks",
    deliverables: ["Regular Updates", "Beta Version", "Code Reviews"]
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices.",
    duration: "3-5 days",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Analysis"]
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description: "We handle the complete deployment process and ensure everything runs smoothly in the live environment.",
    duration: "1-2 days",
    deliverables: ["Live Deployment", "Training", "Go-Live Support"]
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your solution updated, secure, and running at peak performance.",
    duration: "Ongoing",
    deliverables: ["24/7 Support", "Updates", "Maintenance"]
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Our Development Process
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology to ensure your project is delivered on time, 
            within budget, and exceeds your expectations
          </p>
        </div>

        {/* Process Steps - Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <step.icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        Duration: {step.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Process Flow</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 max-w-20 text-center">{step.title}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-primary to-primary/40 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary/10 via-white/80 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Ideas Into Reality?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Let's discuss your requirements and see how our proven process can help bring your vision to life with exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;