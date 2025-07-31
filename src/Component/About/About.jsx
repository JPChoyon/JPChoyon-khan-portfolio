import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import aboutImg from "../../assets/images/About/passport_.jpg";
import SectionHeader from "../../SectionHeader/SectionHeader";

import "./About.css";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const title = ["Experiance", "Education"];

  return (
    <>
      <SectionHeader title={"About"} subtitle={"Me"}></SectionHeader>
      <div
        id="about"
        className="flex flex-col md:flex-row text-center md:text-left justify-evenly  pb-10 items-center "
      >
        <div className="left-about-container">
          <img
            className="h-96"
            src={aboutImg}
            alt="jp choyon khan about image"
          />
        </div>
        <div className="right-container md:w-[60%] space-y-3">
          <p className="text-xl text-justify">
            I specialize in <b> full-stack</b> web development, proficient in
            <b> Mongoose</b> and <b> Prisma</b> for database management,
            <b> Express.js</b> for server-side logic, <b> NextJs</b> for dynamic
            user interfaces, <b> Node.js</b> for runtime. I create scalable,
            modern web applications, ensuring a seamless user experience from
            database to front-end.
          </p>
          {/* tab  */}
          <div>
            <Tabs
              className="space-y-3"
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="mx-auto flex justify-center md:justify-normal items-center">
                {title.map((item, index) => (
                  <Tab
                    key={index}
                    className={` mr-5 font-bold
                     ${
                       tabIndex === index
                         ? "selected cursor-pointer"
                         : " border-b-[#bb8506] border-0  cursor-pointer "
                     }
                    `}
                  >
                    {item}
                  </Tab>
                ))}
              </TabList>
              {/* <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5]">Full-Stack Developer</h1>
                  <p className="text-xs">Expertise Level </p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">UI/UX Design</h1>
                  <p className="text-xs">Intermediate Level</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">Back-End Developer</h1>
                  <p className="text-xs">Intermediate Level</p>
                </div>
              </TabPanel> */}
              <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5] text-xl">
                    Full-Stack Experiance
                  </h1>
                  <p className="text">jun, 2024 - feb, 2025</p>
                  <p className="text-">Homagekey International (Remote)</p>
                </div>
              </TabPanel>
              <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5] text-xl">
                    National University
                  </h1>
                  <p className="text">2023 - Present</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5] text-xl">H S C</h1>
                  <p className="text">Passed : 2021</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
