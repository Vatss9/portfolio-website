import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export const metadata = {
  title: "Sourav's_Portfolio",
  
};

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection/>
          <ProjectsSection/>
          <EmailSection/>
        </div>
          <Footer/>
      </main>
    </div>
  );
}
