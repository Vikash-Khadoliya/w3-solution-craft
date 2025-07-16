import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Vikash Khadoliya",
    role: "CEO/Co-Founder & Full-Stack Developer",
    image: "./src/assets/vikash.jpg",
    description: "Co-founder and full-stack developer with deep expertise in React, Node.js, and cloud solutions. Leads the team in delivering innovative and scalable digital products.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Abhay Ghorela",
    role: "CEO/Co-Founder & Full-Stack Developer",
    image: "./src/assets/abhay.jpg",
    description: "Co-founder with expertise in frontend and backend development. Skilled in building interactive web interfaces using modern technologies.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Aditya Kumawat",
    role: "Frontend and WordPress Developer",
    image: "./src/assets/aditya.jpg",
    description: "Expert in WordPress development and frontend technologies.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-gradient-to-br from-white/90 to-secondary/40 rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col items-center p-6 animate-float"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Member Photo */}
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-primary shadow-xl group-hover:scale-105 transition-transform duration-500 bg-white"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                />
                {/* Social Links - appear on hover, floating above image */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white shadow transition-colors duration-300 border border-primary/20"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white shadow transition-colors duration-300 border border-primary/20"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white shadow transition-colors duration-300 border border-primary/20"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="flex-1 flex flex-col items-center text-center mt-2">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
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