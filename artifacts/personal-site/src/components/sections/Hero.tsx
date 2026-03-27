import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "@workspace/api-client-react";

export function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden flex items-start md:items-center md:min-h-[75vh]">
      {/* Abstract fun background gradient */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      
      {/* Subtle texture/grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {profile.avatarUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="mb-10 inline-block relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary blur-md opacity-20" />
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-background shadow-xl relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full p-2 shadow-sm z-20">
                <span className="text-xl leading-none block">👋</span>
              </div>
            </motion.div>
          )}

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary/40" />
            <p className="text-primary font-bold tracking-wider uppercase text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </p>
          </div>

          <h1 className="font-display font-black leading-[1.05] tracking-tight text-foreground mb-8">
            <span className="block text-xl md:text-2xl font-semibold text-muted-foreground tracking-wide mb-3">Hi, I'm</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl">{profile.name}.</span>
            <span className="block mt-5 text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold max-w-xl leading-snug">{profile.headline}</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Button 
              size="lg" 
              className="rounded-full px-8 gap-2 group font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-md h-14"
              onClick={() => {
                const el = document.querySelector("#about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover my work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-3 ml-2">
              {profile.email && (
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card" asChild>
                  <a href={`mailto:${profile.email}`} aria-label="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {profile.linkedinUrl && (
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card" asChild>
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {profile.instagramUrl && (
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-border/50 hover:border-primary hover:text-primary transition-colors bg-card" asChild>
                  <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
