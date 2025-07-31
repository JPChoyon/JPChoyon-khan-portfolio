import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Contact from "../../Component/Contact/Contact";
import Project from "../../Component/Projects/Project";
import Skills from "../../Component/Skills/Skills";

import AOS from "aos";
import "aos/dist/aos.css"; 
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};
AOS.init();
export default Home;