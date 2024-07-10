import Image from "next/image";
import React from "react";

const ConatctUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-b from-[#331D63] to-[#030114]">
        <div className="bg-[url('/Global/hero_bg.svg')] bg-cover bg-no-repeat bg-center sm:pt-40 md:pt-48 lg:pt-2 xl:pt-60 pb-48">
          <p className="text-6xl pb-2.5 font-bold text-white">Contact Us Now</p>
          <p className="text-gray-500">
            Home / &nbsp;<span className="text-white">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Details Sections */}
      <div className="text-center text-6xl pb-24 ">
        <p className="pb-5 font-bold">
          <span className="text-gradient">Contact</span> Now
        </p>
        <p className="text-center text-gray-500 text-3xl sm:w-[90%] md:w-[90%] lg:w-[75%] xl:w-[70%] xxl:w-[50%] m-auto">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          dignissim, metus nec fringilla accumsan, risus.
        </p>
      </div>

      {/* Contact details sections */}
      <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-5 ">
        <div className="bg-[#322B4D] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-6 rounded-md p-11">
          <Image
            src={"/Conatct_us/location.svg"}
            alt="Location"
            width={50}
            height={50}
          />
          <p>
            807, Shivalik Shilp, Iscon Cross Road, SG Highway, Ahmedabad,
            Gujrat, India.
          </p>
        </div>
        <div className="bg-[#322B4D] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center gap-6 rounded-md p-11">
          <Image
            src={"/Conatct_us/call.svg"}
            alt="Location"
            width={50}
            height={50}
          />
          <p>
            +91 98765 43210 <br /> +91 98765 43210
          </p>
        </div>
        <div className="bg-[#322B4D] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center gap-6 rounded-md p-11">
          <Image
            src={"/Conatct_us/email.svg"}
            alt="Location"
            width={50}
            height={50}
          />
          <p>
            ailab@gfuturetech.in <br /> ailab123@gfuturetech.in{" "}
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] m-auto gap-5 mb-52">
        <div className="bg-[#322B4D] p-12 mt-7 rounded-md">
          <p className="text-lg mb-6">Contact Form</p>

          <form action="" className="text-gray-400">
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 items-center mb-5">
              <label htmlFor="department">
                Department <span className="">:</span>
              </label>
              <select className="bg-transparent border border-[#6330fb85] p-3  rounded-md col-span-3">
                <option value="">Select Department</option>
              </select>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 items-center mb-5">
              <label htmlFor="fullname">
                FullName <span className="">:</span>
              </label>
              <input
                placeholder="Full Name"
                type="text"
                className="bg-transparent border border-[#6330fb85] p-3  rounded-md col-span-3"
              />
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 items-center mb-5">
              <label htmlFor="contact number">
                Contact Number <span className="">:</span>
              </label>
              <input
                placeholder="Contact Number"
                type="number"
                className="bg-transparent border border-[#6330fb85] p-3  rounded-md col-span-3"
              />
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 items-center mb-5">
              <label htmlFor="email">
                Email Address <span className="">:</span>
              </label>
              <input
                placeholder="Email Address"
                type="text"
                className="bg-transparent border border-[#6330fb85] p-3  rounded-md col-span-3"
              />
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 items-center mb-5">
              <label htmlFor="subject">
                Subject <span className="">:</span>
              </label>
              <textarea
                rows={5}
                placeholder="Subject"
                className="bg-transparent border border-[#6330fb85] p-3  rounded-md col-span-3"
              />
            </div>
            <div className="m-auto text-center">
              <input
                type="submit"
                value="Submit"
                className="button-gradient pt-4 pb-4 pl-12 pr-12 rounded-full hover:cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div className="bg-[#322B4D] p-5 mt-7 rounded-md">
          <iframe
            title="GFuture Tech Pvt. Ltd. Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9112504624472!2d72.50432297591215!3d23.02703061616066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9da4f2e68895%3A0x9813cd5ecc646fac!2sGFuture%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1716801713088!5m2!1sen!2sin"
            width="710"
            height="555"
            className="w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ConatctUs;
