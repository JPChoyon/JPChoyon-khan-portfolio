import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mb-8">
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
          src={banner}
          alt=""
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-extrabold tracking-tight text-blue-500 sm:text-4xl sm:leading-none">
            Social Events
            <br className="hidden md:block" />
            Grand Celebration
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Join us in celebrating love! Explore our events journey, details,
            and RSVP for the big day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
