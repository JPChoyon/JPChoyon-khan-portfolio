import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Project from "../../Component/Projects/Project";
import Skills from "../../Component/Skills/Skills";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Skills></Skills>
    </div>
  );
};

export default Home;