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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Our Development Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, 
            within budget, and exceeds your expectations
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number (Hidden on mobile, timeline dot on desktop) */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="group hover:shadow-medium transition-all duration-300 border-primary/10 bg-gradient-to-br from-white to-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Mobile Step Number */}
                        <div className="lg:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                              <step.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {step.title}
                              </h3>
                              <p className="text-sm text-primary font-medium">
                                Duration: {step.duration}
                              </p>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {step.description}
                          </p>

                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              Key Deliverables:
                            </h4>
                            <div className="space-y-1">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <div key={deliverableIndex} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your requirements and see how we can help bring your vision to life.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-medium">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;