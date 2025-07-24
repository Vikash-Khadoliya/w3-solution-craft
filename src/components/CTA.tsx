import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Trophy, Clock, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "25+", color: "from-blue-400 to-cyan-400" },
  { icon: Trophy, label: "Projects Completed", value: "50+", color: "from-green-400 to-emerald-400" },
  { icon: Star, label: "Average Rating", value: "4.8", color: "from-yellow-400 to-orange-400" },
  { icon: Clock, label: "Years Experience", value: "3+", color: "from-purple-400 to-pink-400" }
];

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-primary via-primary-hover to-primary relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-foreground/20 via-transparent to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-foreground/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary-foreground/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm mb-6 animate-bounce-in">
            <Sparkles className="h-5 w-5 text-primary-foreground mr-2" />
            <span className="text-primary-foreground/90 font-medium">Transform Your Business Today</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
            Ready to 
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-glow"> Transform </span>
            Your Business?
          </h2>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-8 leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Join hundreds of satisfied clients who have revolutionized their digital presence with our 
            cutting-edge solutions. Let's build something amazing together.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group text-center opacity-0 animate-bounce-in hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="relative">
                <div className={`inline-flex p-6 bg-gradient-to-br ${stat.color} rounded-3xl backdrop-blur-sm mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}>
                  <stat.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-glow"></div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 opacity-0 animate-scale-in" style={{ animationDelay: '1.2s' }}>
          <Button 
            size="lg" 
            className="relative bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-12 py-6 text-xl group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact">
              <span className="relative z-10 flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-hover/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="relative border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm font-bold px-12 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            asChild
          >
            <Link to="/our-work">
              <span className="relative z-10 flex items-center">
                View Our Portfolio
                <TrendingUp className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="text-primary-foreground/80 mb-6 text-lg">Trusted by businesses worldwide</p>
          <div className="flex justify-center items-center gap-3 text-primary-foreground/60">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-6 w-6 fill-current text-yellow-400 animate-bounce-in hover:scale-125 transition-transform cursor-pointer" 
                style={{ animationDelay: `${1.7 + i * 0.1}s` }}
              />
            ))}
            <span className="ml-4 text-primary-foreground font-semibold text-lg">4.8/5</span>
            <span className="ml-2 text-lg">based on 55+ reviews</span>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm animate-float shadow-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm animate-float shadow-xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm animate-float shadow-xl" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm animate-float shadow-xl" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTA;