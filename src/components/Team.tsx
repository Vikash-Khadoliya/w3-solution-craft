import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "CEO & Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description: "10+ years of experience in building scalable web applications. Specializes in React, Node.js, and cloud architecture.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
    description: "Award-winning designer with expertise in user experience and interface design. Creates intuitive and beautiful digital experiences.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    description: "Expert in React Native and Flutter development. Has published 20+ apps with millions of downloads across platforms.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    description: "Specializes in database design, API development, and DevOps. Passionate about building robust and secure backend systems.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional digital solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-soft hover:shadow-primary/20 transition-all duration-300"
            >
              {/* Member Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links - appear on hover */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our growing team.
            </p>
            <a
              href="mailto:careers@w3softwaresolutions.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-medium"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;