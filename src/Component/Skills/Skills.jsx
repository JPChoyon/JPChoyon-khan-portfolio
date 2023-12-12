import "./Skills.css";
import { FaNode, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import coadingImg from "../../assets/images/coading.gif";
import SectionHeader from "../../SectionHeader/SectionHeader";

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <SectionHeader subtitle={"Skills"} title={"My"}></SectionHeader>
        <div className="skills__container flex md:items-center flex-col md:flex-row justify-around">
          <div className="w-auto md:w-[50%]">
            <div className="skills__data">
              <div className="skills__names flex gap-3">
                <FaReact className="skills__icon" />
                <span className="skills__name"> React</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data ">
              <div className="skills__names">
                <SiTailwindcss className="bx bxl-css3 skills__icon" />
                <span className="skills__name">Tailwind</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <TbBrandJavascript className="bx bxl-javascript skills__icon" />
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <FaNode className="bx bxs-paint skills__icon" />
                <span className="skills__name">Node js</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[20%]">
            <img src={coadingImg} alt="" className="skills__img w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
