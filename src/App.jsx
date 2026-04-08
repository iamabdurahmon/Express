import About from "./components/about/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import VideoBox from "./components/6 Video Box/VideoBox";
import Services from "./components/Services/Services";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from "./layout/footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <VideoBox />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
