import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Globe, Search, MapPin, Briefcase } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Joe L. Fernandez",
    position: "CEO, Fendzusa Inc.",
    company: "Fendzusa Asset Managment.",
    rating: 5,
    text: "W3 Software Solutions delivered an exceptional e-commerce platform for our business. Their attention to detail and technical expertise exceeded our expectations.",
    avatar: "/assets/Joe.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateApp",
    company: "InnovateApp",
    rating: 5,
    text: "The mobile app they developed for us has been a game-changer. Professional, responsive, and delivered on time. Highly recommended!",
    avatar: "/assets/Michael.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    rating: 5,
    text: "Working with W3 was seamless. They understood our vision and created a website that perfectly represents our brand.",
    avatar: "/assets/Emily.jpg",
  }
];

const platformRatings = [
  {
    platform: "Clutch",
    rating: "4.8",
    maxRating: "5.0",
    reviews: "12",
    icon: Briefcase,
    color: "text-orange-500"
  },
  {
    platform: "Upwork",
    rating: "4.9",
    maxRating: "5.0",
    reviews: "15",
    icon: Globe,
    color: "text-green-500"
  },
  {
    platform: "Google",
    rating: "4.9",
    maxRating: "5.0",
    reviews: "18",
    icon: Search,
    color: "text-blue-500"
  },
  {
    platform: "Freelancer",
    rating: "4.8",
    maxRating: "5.0",
    reviews: "10",
    icon: MapPin,
    color: "text-purple-500"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied clients have to say about working with us
          </p>
        </div>

        {/* Platform Ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {platformRatings.map((platform, index) => (
            <Card 
              key={platform.platform}
              className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <platform.icon className={`h-6 w-6 ${platform.color}`} />
                  <h3 className="font-bold text-lg text-foreground">{platform.platform}</h3>
                </div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {platform.rating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.floor(parseFloat(platform.rating)))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {platform.reviews} reviews
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-white/90 backdrop-blur-sm border-primary/10 hover:shadow-medium transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">Trusted & Certified</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
              <p className="text-sm font-medium text-foreground">SSL Certified</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
              <p className="text-sm font-medium text-foreground">GDPR Compliant</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
              <p className="text-sm font-medium text-foreground">SOC 2 Type II</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
              <p className="text-sm font-medium text-foreground">ISO 27001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;