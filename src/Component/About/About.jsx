import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import aboutImg from "../../assets/images/About/IMG_20230127_203548.jpg";
import SectionHeader from '../../SectionHeader/SectionHeader';
import './About.css';

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const title = ["Skills", "Experiance", "Education"];
  return (
    <>
      <SectionHeader title={"About"} subtitle={"Me"}></SectionHeader>
      <div id='about' className="flex flex-col md:flex-row text-center md:text-left justify-evenly  pb-10 items-center ">
        <div className="left-about-container">
          <img
            className="h-96"
            src={aboutImg}
            alt="jp choyon khan about image"
          />
        </div>
        <div className="right-container md:w-[60%] space-y-3">
          <p className="">
            As a MERN stack developer, I specialize in full-stack web
            development, proficient in MongoDB for data storage, Express.js for
            server-side logic, React.js for dynamic user interfaces, and Node.js
            for runtime. I create scalable, modern web applications, ensuring a
            seamless user experience from database to front-end.
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
                    className={` mr-5
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
              <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5]">Font-End Developer</h1>
                  <p className="text-xs">Expart Lavel</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">UI/UX Design</h1>
                  <p className="text-xs">Intermediate Lavel</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">Back-End Developer</h1>
                  <p className="text-xs">Basics Lavel</p>
                </div>
              </TabPanel>
              <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5]">Font-End Experiance</h1>
                  <p className="text-xs">2020 - Present</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">Back-End Experince</h1>
                  <p className="text-xs">2023 - Present</p>
                </div>
              </TabPanel>
              <TabPanel className="space-y-4">
                <div>
                  <h1 className=" text-[#00ADB5]">National University</h1>
                  <p className="text-xs">2022 - Present</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">H S C</h1>
                  <p className="text-xs">Passed : 2021</p>
                </div>
                <div>
                  <h1 className=" text-[#00ADB5]">S S C </h1>
                  <p className="text-xs">Passed : 2019</p>
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