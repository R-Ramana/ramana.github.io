import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Certifications } from "@/sections/Certifications";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />  
      <Certifications /> 
      <Footer />
    </div>
  );
}
