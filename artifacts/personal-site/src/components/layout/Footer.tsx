import { Linkedin, Mail, ArrowUp, Heart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "@workspace/api-client-react";

export function Footer({ profile }: { profile: Profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-card text-foreground py-20 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 border-b border-border/50 pb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6">
              Got something interesting to <span className="text-primary">work on</span>?
            </h2>
            <p className="text-muted-foreground text-xl mb-8 font-medium">
              Always open to new opportunities and interesting conversations.
            </p>
            {profile.email && (
              <a 
                href={`mailto:${profile.email}`}
                className="text-2xl md:text-3xl font-bold border-b-4 border-primary/30 hover:border-primary pb-1 transition-colors inline-block"
              >
                {profile.email}
              </a>
            )}
          </div>
          
          <div className="flex gap-4">
            {profile.email && (
              <Button variant="outline" size="icon" className="rounded-full w-16 h-16 bg-background border-border hover:border-primary hover:text-primary transition-all shadow-sm" asChild>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail className="w-7 h-7" />
                </a>
              </Button>
            )}
            {profile.linkedinUrl && (
              <Button variant="outline" size="icon" className="rounded-full w-16 h-16 bg-background border-border hover:border-primary hover:text-primary transition-all shadow-sm" asChild>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-7 h-7" />
                </a>
              </Button>
            )}
            {profile.instagramUrl && (
              <Button variant="outline" size="icon" className="rounded-full w-16 h-16 bg-background border-border hover:border-primary hover:text-primary transition-all shadow-sm" asChild>
                <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-7 h-7" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-medium flex items-center gap-2">
            © {new Date().getFullYear()} {profile.name}. Made with <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest bg-secondary/50 px-6 py-3 rounded-full"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
