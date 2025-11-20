import './skills.css';
import { FaFigma, FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import Lottie from "react-lottie";
import animationData from "../../assets/images/animation/Developer.json";
import SectionHeader from "../../SectionHeader/SectionHeader";

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section className="skills section" id="skills">
        <SectionHeader subtitle={"Skills"} title={"My"}></SectionHeader>
        <div className="skills__container flex md:items-center flex-col-reverse md:flex-row justify-around">
          <div className="w-auto md:w-[50%]">
            <div className="skills__data">
              <div className="skills__names flex gap-3">
                <SiTypescript className="skills__icon" />
                <span className="skills__name"> Typescript</span>
              </div>
              <div className="skills__bar skills__ts"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names flex gap-3">
                <TbBrandNextjs className="skills__icon" />
                <span className="skills__name"> NextJs</span>
              </div>
              <div className="skills__bar skills__nextjs"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data ">
              <div className="skills__names">
                <SiTailwindcss className="bx bxl-css3 skills__icon" />
                <span className="skills__name">Tailwind</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">100%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <TbBrandRedux className="bx bxl-javascript skills__icon" />
                <span className="skills__name">Redux</span>
              </div>
              <div className="skills__bar skills__redux"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <FaFigma className="bx bxl-javascript skills__icon" />
                <span className="skills__name">UI/UX Design</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <FaNode className="bx bxs-paint skills__icon" />
                <span className="skills__name">Node js</span>
              </div>
              <div className="skills__bar skills__nodejs"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <SiExpress className="bx bxl-javascript skills__icon" />
                <span className="skills__name">Express JS</span>
              </div>
              <div className="skills__bar skills__express"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <SiPostgresql className="bx bxl-javascript skills__icon" />
                <span className="skills__name">PostgreSQL</span>
              </div>
              <div className="skills__bar skills__postgresql"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <SiPrisma className="bx bxl-javascript skills__icon" />
                <span className="skills__name">Prisma</span>
              </div>
              <div className="skills__bar skills__prisma"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <SiMongoose className="bx bxl-javascript skills__icon" />
                <span className="skills__name">Docker</span>
              </div>
              <div className="skills__bar skills__docker"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-[35%] ">
            <Lottie options={defaultOptions} className="md:w-64 " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
