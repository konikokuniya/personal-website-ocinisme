import { motion } from "framer-motion";
import type { Profile } from "@workspace/api-client-react";

export function HighlightsSection({ highlights }: { highlights: Profile['highlights'] }) {
  if (!highlights?.length) return null;

  return (
    <section id="highlights" className="py-12 md:py-16 bg-card border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-border/40 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-foreground mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
