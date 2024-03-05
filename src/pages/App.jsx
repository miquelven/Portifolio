import ScrollProjects from "../assets/components/ScrollProjects";
import Hero from "../assets/components/Hero";
import Header from "../assets/components/Header";

import { Outlet } from "react-router-dom";
import Contact from "../assets/components/Contact";
import Footer from "../assets/components/Footer";
import About from "../assets/components/About";

import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: "500",
    });
  }, []);

  return (
    <>
      <Header />
      <main className="relative z-10 w-full">
        <Hero />
        <section id="about" className="py-10">
          <About />
        </section>

        <ScrollProjects />

        <section
          id="contact"
          className="pt-32 mb-44"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Contact />
        </section>
      </main>

      <Footer />
      <Outlet />
    </>
  );
}

export default App;
