import { motion } from "framer-motion";
import type { Profile } from "@workspace/api-client-react";
import { Badge } from "@/components/ui/badge";

export function SkillsSection({ skills }: { skills: Profile['skills'] }) {
  if (!skills?.length) return null;

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-6">Skills & Expertise</h2>
          <p className="text-muted-foreground text-xl font-medium">
            Technologies and tools I've worked with throughout my career.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } },
            hidden: {}
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
            >
              <Badge 
                variant="outline" 
                className="px-6 py-3 text-base md:text-lg font-bold rounded-full bg-card text-foreground border-border/60 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-default shadow-sm hover:shadow-md"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
