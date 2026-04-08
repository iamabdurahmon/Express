import About from "./components/about/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import VideoBox from "./components/6 Video Box/VideoBox";
import Services from "./components/Services/Services";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <VideoBox />
      <Services />
    </div>
  );
};

export default App;
