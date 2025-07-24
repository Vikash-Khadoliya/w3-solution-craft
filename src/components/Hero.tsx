import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-hover/85 to-primary/90"></div>
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-foreground/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-primary-foreground/10 to-transparent rounded-full blur-3xl float-slow"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-foreground/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm mb-8 animate-bounce-in">
            <Sparkles className="h-4 w-4 text-primary-foreground mr-2 animate-glow" />
            <span className="text-primary-foreground/90 font-medium">Trusted by 25+ Happy Clients</span>
            <Star className="h-4 w-4 text-yellow-400 ml-2 fill-current" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-tight opacity-0 animate-fade-in">
            Crafting 
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-glow text-glow"> Digital Excellence </span>
            <span className="block text-primary-foreground/90">One Solution at a Time</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            We transform your ideas into powerful websites and applications. 
            Professional development solutions tailored for your business success.
          </p>

          {/* Enhanced Services Preview */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="group flex items-center gap-4 text-primary-foreground/90 hover-scale cursor-pointer">
              <div className="p-4 bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl backdrop-blur-sm group-hover:bg-primary-foreground/20 transition-all duration-300 hover-rotate">
                <Code className="h-7 w-7" />
              </div>
              <span className="font-semibold text-lg">Web Development</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary-foreground/30"></div>
            <div className="group flex items-center gap-4 text-primary-foreground/90 hover-scale cursor-pointer">
              <div className="p-4 bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl backdrop-blur-sm group-hover:bg-primary-foreground/20 transition-all duration-300 hover-rotate">
                <Smartphone className="h-7 w-7" />
              </div>
              <span className="font-semibold text-lg">App Development</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-bounce-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="premium" 
              size="lg" 
              className="group interactive-button text-xl px-10 py-6 rounded-2xl shadow-2xl"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm interactive-button text-xl px-10 py-6 rounded-2xl" 
              asChild
            >
              <Link to="/our-work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm float-slow shadow-xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm float-medium shadow-xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm float-fast shadow-xl" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm animate-float shadow-xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-primary-foreground/5 to-transparent rounded-full backdrop-blur-sm float-slow shadow-xl" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;