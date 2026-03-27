import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { Profile } from "@workspace/api-client-react";

export function ExperienceSection({ experience }: { experience: Profile['experience'] }) {
  if (!experience?.length) return null;

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <Briefcase className="w-7 h-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">Where I've been</h2>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-border/50 ml-7 md:ml-9 pb-4">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-16 last:mb-0 relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 rounded-full bg-background border-4 border-primary left-[-11px] top-1.5 shadow-sm group-hover:scale-125 transition-transform duration-300" />
              
              <div className="bg-card border border-border/40 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-lg text-muted-foreground mt-2 font-semibold flex items-center gap-3">
                      {job.logoUrl && (
                        <img src={job.logoUrl} alt={job.company} className="w-8 h-8 rounded-lg object-contain bg-white p-1" />
                      )}
                      {job.company}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap self-start uppercase tracking-wider">
                    {job.period}
                  </div>
                </div>
                
                <div className="text-muted-foreground text-lg leading-relaxed font-medium">
                  {job.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
