import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/company/w3-software-solutions",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/w3softwaresolutions/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:web3softwaresolutionsinfo@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                W3 Software Solutions
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transforming ideas into powerful digital solutions. We create
                websites and applications that drive business growth and deliver
                exceptional user experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="text-gray-300 hover:text-white hover:bg-white/10"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 W3 Software Solutions. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white hover:bg-white/10 group"
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
