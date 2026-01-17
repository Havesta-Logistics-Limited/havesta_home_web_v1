import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../../common/faq/Faq";
import DownloadApp from "../Home/components/Hero/DownloadApp";

export default function Contact() {
  return (
    <div className="font-primary">
      <ReuseableHero
        text={"Get In Touch Today: We are always available to support you "}
      />

      <div className=" py-0 md:px-8 lg:px-16 xl:px-32 md:py-20 mt-32">
        <div className="max-w-7xl mx-auto bg-white rounded-none md:rounded-2xl shadow-none md:shadow-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information Section */}
            <div className="lg:w-2/5 bg-harvestaDarkGreen p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background decoration - two overlapping circles */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-8 -mb-8"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/15 rounded-full"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                <p className="text-white/80 mb-12">
                  Send an e-mail or start a live chat!
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaPhoneVolume size={20} />
                    </div>
                    <span className="text-lg">080HAVESTA</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <IoMail size={20} />
                    </div>
                    <span className="text-lg">hello@havesta.com</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <FaLocationDot size={20} />
                    </div>
                    <span className="text-lg leading-relaxed">
                      17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-16">
                  <a
                    href="https://www.facebook.com/share/1BKct6DEEh/"
                    className="text-white hover:text-harvestaYellow transition-colors"
                  >
                    <FiFacebook size={20} />
                  </a>
                  <a
                    href="https://x.com/havestahq?t=8MyC1z0ALuVRowpor-naMg&s=09"
                    className="text-white hover:text-harvestaYellow transition-colors"
                  >
                    <FaXTwitter size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/havesta/"
                    className="text-white hover:text-harvestaYellow transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@havestahq?is_from_webapp=1&sender_device=pc"
                    className="text-white hover:text-harvestaYellow transition-colors"
                  >
                    <FaTiktok size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/havestahq?igsh=cTN0bHVyNjUxeDh1"
                    className="text-white hover:text-harvestaYellow transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-harvestaDarkGreen focus:outline-none transition-colors bg-transparent"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-harvestaDarkGreen focus:outline-none transition-colors bg-transparent"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-harvestaDarkGreen focus:outline-none transition-colors bg-transparent"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-harvestaDarkGreen focus:outline-none transition-colors bg-transparent"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-4">
                    Select Subject
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Deliveries", "Product", "Vendors/Riders", "General"].map(
                      (subject) => (
                        <label
                          key={subject}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            className="w-4 h-4 border-2 border-harvestaDarkGreen bg-white checked:bg-white checked:border-harvestaDarkGreen focus:ring-harvestaDarkGreen focus:ring-0 focus:ring-offset-0 appearance-none rounded-full relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-harvestaDarkGreen checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                          />
                          <span className="text-sm font-normal text-gray-700">
                            {subject}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-harvestaDarkGreen focus:outline-none transition-colors resize-none"
                    placeholder="write your message"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-harvestaDarkGreen text-white px-8 py-3 rounded-lg font-normal hover:bg-green-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="font-primary bg-green-radial py-20 md:py-40">
        <Faq />
        <div className="mt-16 md:mt-32">
          <DownloadApp />
        </div>
      </div>
    </div>
  );
}
