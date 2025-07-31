import { useTypewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import "./style.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Typescript",
      "NextJS",
      "Node JS",
      "Mongoose",
      "Express JS",
      "Prisma",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <div
      href="home"
      className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mb-8 h-full overflow-hidden"
    >
      {/* Optional floating circle background */}
      <div className="absolute w-96 h-96 bg-[#00ADB5]/20 rounded-full top-10 -left-32 blur-3xl animate-pulse"></div>

      {/* Right image section */}
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
      >
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://raw.githubusercontent.com/JPChoyon/JPChoyon-khan-portfolio/main/src/assets/images/Banner/Banner.jpg"
          alt="JP Choyon khan website Banner"
        />
      </div>

      {/* Left text section */}
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 space-y-4">
          {/* Badge */}
          <span className="inline-block bg-[#ff4757] text-white text-xs px-3 py-1 rounded-full font-semibold animate-bounce">
            Available for Hire
          </span>

          {/* Heading */}
          <h2 className="mb-5 font-sans text-xl md:text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] via-[#6FD164] to-[#393E46] animate-gradient sm:text-4xl sm:leading-none">
            Hi I Am,
            <br className="hidden md:block" /> J P Choyon Khan
          </h2>

          {/* Typewriter */}
          <p className="font-bold text-xl md:text-3xl">
            Working With
            <span className="text-[#00ADB5] ml-2">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href="https://drive.google.com/u/0/uc?id=1Fz-DAYriChPf7Fwgb8-otGFow67fCUHX&export=download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-[#49d4db] hover:bg-[#28888d] border-0 text-[#EEEEEE] transform transition-transform duration-300 hover:-translate-y-1">
                <FaDownload /> Download CV
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1Fz-DAYriChPf7Fwgb8-otGFow67fCUHX/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn  bg-[#6FD164] hover:bg-[#247c1a] border-0 text-[#EEEEEE] transform transition-transform duration-300 hover:-translate-y-1">
                <FaDownload /> View CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
