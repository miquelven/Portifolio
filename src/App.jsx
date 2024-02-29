import ScrollProjects from "./assets/components/ScrollProjects";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="relative z-10 w-full">
        <Hero />

        <div className="my-52 w-[1500px] mx-auto px-5">
          <Skills />
        </div>
        <div>
          <ScrollProjects />
        </div>
      </main>
    </>
  );
}

export default App;
