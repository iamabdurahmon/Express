import React from "react";
import About from "./components/about/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import VideoBox from "./components/6 Video Box/VideoBox";
import Services from "./components/Services/Services";
const App = () => {
  return (
    <div>
      <About />
      <HowItWorks />
      <VideoBox />
      <Services />
    </div>
  );
};

export default App;
