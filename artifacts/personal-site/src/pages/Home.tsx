import { profileData } from "@/data/profile";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { HighlightsSection } from "@/components/sections/Highlights";
import { AboutSection } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  const profile = profileData;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar
        name={profile.name}
        email={profile.email}
        linkedinUrl={profile.linkedinUrl}
        instagramUrl={profile.instagramUrl}
      />
      <main>
        <HeroSection profile={profile} />
        <HighlightsSection highlights={profile.highlights} />
        <AboutSection profile={profile} />
        <ExperienceSection experience={profile.experience} />
        <EducationSection education={profile.education} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
