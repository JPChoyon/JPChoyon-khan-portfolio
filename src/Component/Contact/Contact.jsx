import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_knp75u3", // Service ID
        "template_vyktkij", // Template ID
        form.current,
        "IarQXvNSCCMUjvZYk" // Public Key
      )
      .then((result) => {
        console.log("EmailJS SUCCESS:", result);
        toast.success("Email sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log("EmailJS ERROR:", error);
        toast.error("Email sending failed!");
      });
  };

  return (
    <div id="contact">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-4 md:mb-10">
            <SectionHeader title={"Contact"} subtitle={"Me"} />
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center">
              If any query, feel free to contact me
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                {/* NAME */}
                <div className="p-2 w-1/2">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    onChange={(e) => console.log("Name:", e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                  />
                </div>

                {/* EMAIL */}
                <div className="p-2 w-1/2">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    onChange={(e) => console.log("Email:", e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                  />
                </div>

                {/* MESSAGE */}
                <div className="p-2 w-full">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    onChange={(e) => console.log("Message:", e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 h-32 py-1 px-3"
                  />
                </div>

                {/* SUBMIT */}
                <div className="p-2 w-full">
                  <input
                    type="submit"
                    value="Send"
                    className="flex mx-auto text-white bg-indigo-500 py-2 px-8 rounded cursor-pointer"
                  />
                </div>
              </div>
            </form>

            {/* FOOTER */}
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-indigo-500">jpchoyonkhan65@gmail.com</p>
              <p className="my-5">
                Jhenaidah <br />
                Khulna, Bangladesh
              </p>

              <span className="inline-flex gap-4 justify-center">
                <a href="https://github.com/JPChoyon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jpchoyonkhan130/">
                  <FaLinkedin />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
