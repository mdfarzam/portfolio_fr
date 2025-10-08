import Navbar from "@/components/navbar";
import Hero from "@/pages/hero";
import Services from "@/pages/services";
import Mvp from "@/pages/mvp";  
import About from "@/pages/about";  
import Faqs from "@/pages/faqs";  
import Contact from "@/pages/contact";  
import Projects from "@/pages/projects";  
import Footer from "@/pages/footer";  

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <Services />
        <Mvp />
        <Projects/>
        <About />
        <Faqs />
        <Contact />
        <Footer />
    </>
  );
}
