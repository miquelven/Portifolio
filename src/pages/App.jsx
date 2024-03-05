import ScrollProjects from "../assets/components/ScrollProjects";
import Hero from "../assets/components/Hero";
import Header from "../assets/components/Header";

import { Outlet } from "react-router-dom";
import Contact from "../assets/components/Contact";
import Footer from "../assets/components/Footer";
import About from "../assets/components/About";

function App() {
  return (
    <>
      <Header />
      <main className="relative z-10 w-full">
        <Hero />
        <About />

        <div>
          <ScrollProjects />
        </div>

        <Contact />
      </main>

      <Footer />
      <Outlet />
    </>
  );
}

export default App;
