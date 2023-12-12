import slide1 from "../../assets/images/project/hotel booking websit.png";
import slide2 from "../../assets/images/project/Hotel booking 2.png";
import slide3 from "../../assets/images/project/hotel booking -3.png";
import slide4 from "../../assets/images/project/hotel booking 4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import SectionHeader from "../../SectionHeader/SectionHeader";

const Project = () => {
  return (
    <div className="space-y-10">
      <SectionHeader title={"Recent"} subtitle={"Project"}></SectionHeader>
      {/* project 1 */}
      <div className="flex flex-col md:flex-row md:gap-12 items-center justify-center md:justify-normal">
        <div className="w-96 md:w-[40%]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide1}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide2}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide3}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide4}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="space-y-3">
          <h2 className="font font-semibold text-xl">Hotel Management</h2>
          <p className="text-xs">
            The system allows users to book a room after logging in. Upon
            logging in, users can access the room details page, where they have
            the option to book a room by clicking the designated button. After
            successfully booking a room, users can view their booking details in
            the "My Booking" section. The booking data is securely stored
            through JWT tokens. The home page features a scroll parallax for an
            enhanced visual experience. Additionally, the home page incorporates
            AOS animations to create a smoother and more engaging user
            interface. Users can also cancel their booked rooms through the "My
            Booking" route. Overall, the system aims to provide a seamless and
            visually appealing experience for users interacting with the booking
            platform.
          </p>
          <button className="btn  bg-[#49d4db] border-0 text-[#EEEEEE]">
            <a
              href="https://hotel-booking-jpck.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Live site
            </a>
          </button>
        </div>
      </div>
      {/* project 2 */}
      <div className="flex flex-col md:flex-row-reverse md:gap-12 items-center justify-center md:justify-normal">
        <div className="w-96 md:w-[40%]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide1}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide2}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide3}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide4}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="space-y-3">
          <h2 className="font font-semibold text-xl">Hotel Management</h2>
          <p className="text-xs">
            The system allows users to book a room after logging in. Upon
            logging in, users can access the room details page, where they have
            the option to book a room by clicking the designated button. After
            successfully booking a room, users can view their booking details in
            the "My Booking" section. The booking data is securely stored
            through JWT tokens. The home page features a scroll parallax for an
            enhanced visual experience. Additionally, the home page incorporates
            AOS animations to create a smoother and more engaging user
            interface. Users can also cancel their booked rooms through the "My
            Booking" route. Overall, the system aims to provide a seamless and
            visually appealing experience for users interacting with the booking
            platform.
          </p>
          <button className="btn  bg-[#49d4db] border-0 text-[#EEEEEE]">
            <a
              href="https://hotel-booking-jpck.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Live site
            </a>
          </button>
        </div>
      </div>
      {/* project 3 */}
      <div className="flex flex-col md:flex-row md:gap-12 items-center justify-center md:justify-normal">
        <div className="w-96 md:w-[40%]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide1}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide2}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide3}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-72"
                src={slide4}
                alt="jpchoyonkhan website project picture"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="space-y-3">
          <h2 className="font font-semibold text-xl">Hotel Management</h2>
          <p className="text-xs">
            The system allows users to book a room after logging in. Upon
            logging in, users can access the room details page, where they have
            the option to book a room by clicking the designated button. After
            successfully booking a room, users can view their booking details in
            the "My Booking" section. The booking data is securely stored
            through JWT tokens. The home page features a scroll parallax for an
            enhanced visual experience. Additionally, the home page incorporates
            AOS animations to create a smoother and more engaging user
            interface. Users can also cancel their booked rooms through the "My
            Booking" route. Overall, the system aims to provide a seamless and
            visually appealing experience for users interacting with the booking
            platform.
          </p>
          <button className="btn  bg-[#49d4db] border-0 text-[#EEEEEE]">
            <a
              href="https://hotel-booking-jpck.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Live site
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
