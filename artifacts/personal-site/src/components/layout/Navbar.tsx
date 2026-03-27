import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

interface NavbarProps {
  name: string;
  email?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export function Navbar({ name, email, linkedinUrl, instagramUrl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="text-xl font-display font-black tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
            {name.charAt(0)}
          </span>
          {name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Social icon buttons */}
          <div className="flex items-center gap-2 ml-2">
            {email && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card/50"
                asChild
              >
                <a href={`mailto:${email}`} aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            )}
            {linkedinUrl && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card/50"
                asChild
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            )}
            {instagramUrl && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-9 h-9 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card/50"
                asChild
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-4">
                {email && (
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:text-primary bg-card/50" asChild>
                    <a href={`mailto:${email}`} aria-label="Email"><Mail className="w-5 h-5" /></a>
                  </Button>
                )}
                {linkedinUrl && (
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:text-primary bg-card/50" asChild>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                  </Button>
                )}
                {instagramUrl && (
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:text-primary bg-card/50" asChild>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
