import ScrollProjects from "../components/ScrollProjects";
import Hero from "../components/Hero";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

import AOS from "aos";
import { useEffect } from "react";
import ToTopButton from "../components/ToTopButton";

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
        <section data-scroll-wrapper id="about" className="py-10">
          <About />
        </section>

        <ScrollProjects />

        <section
          data-scroll-wrapper
          id="contact"
          className="pt-32 mb-44 max-sm:pt-80"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Contact />
        </section>
        <ToTopButton />
      </main>

      <Footer />
      <Outlet />
    </>
  );
}

export default App;
