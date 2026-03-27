import { motion } from "framer-motion";
import type { Profile } from "@workspace/api-client-react";

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50 relative border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">The short version</h2>
            <div className="w-16 h-1.5 bg-primary mt-6 rounded-full" />
          </div>
          
          <div>
            <div className="prose prose-lg prose-invert text-muted-foreground leading-relaxed font-medium">
              {/* Splitting summary into paragraphs assuming newlines in data */}
              {profile.summary.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <p key={idx} className="mb-6 last:mb-0 text-lg md:text-xl">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
