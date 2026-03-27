import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { Profile } from "@workspace/api-client-react";

export function EducationSection({ education }: { education: Profile['education'] }) {
  if (!education?.length) return null;

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">How I got here</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border/40 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="text-sm font-bold text-primary mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full uppercase tracking-wider">
                {edu.period}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground text-lg font-medium">
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
