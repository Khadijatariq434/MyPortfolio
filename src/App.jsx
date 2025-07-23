import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return(
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white mt-10">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
};

export default App;
