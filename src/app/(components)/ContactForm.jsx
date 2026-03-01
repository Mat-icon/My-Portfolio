import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FiMail } from "react-icons/fi";
import "./App.scss";
import LuminousBeam from "./LuminousBeam";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mx-auto mt-0 flex justify-center">
        <LuminousBeam height="h-[170px]" color="ffd886" />
      </div>
      <div className="tech backdrop-blur-md glossy-25 w-11/12 md:w-7/12 lg:w-7/12 xl:8/12">
        <div className="about-me-title2 px-4 py-2">
          <p className="text-sm text-white  ">
            write-me
          </p>
          <div className="flex items-center space-x-2 text-[#494949] text-xs">
            <FontAwesomeIcon
              icon={faMinus}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
            <div
              className="w-2.5 h-2.5 border border-[#494949] rounded-sm hover:border-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            ></div>
            <FontAwesomeIcon
              icon={faX}
              className="hover:text-white cursor-pointer"
              style={{ transition: "ease-in 0.5s" }}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 py-6 px-4 flex flex-col md:ml-10"
        >
          <div className="flex items-baseline space-x-2 lg:space-x-4">
            <span className="text-[#9d9d9d] text-sm lg:text-lg">01</span>
            <div className="w-full flex flex-col">
              <label
                htmlFor="fullName"
                className="block text-sm  text-white"
              >
                full-name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-2 block md:w-11/12 w-full px-3 py-4 border active:border-[#91d1f8] border-[#0f0f0f] rounded-[3px] "
                style={{ background: "#15191E" }}
              />
            </div>
          </div>
          <div className="flex items-baseline space-x-2 lg:space-x-4">
            <span className="text-[#9d9d9d] text-sm lg:text-lg">02</span>
            <div className="w-full flex flex-col">
              <label
                htmlFor="company"
                className="block text-sm  text-white"
              >
                company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-4 block md:w-11/12 w-full px-3 py-4 border active:border-[#91d1f8] border-[#0f0f0f] rounded-[3px]"
                style={{ background: "#15191E" }}
              />
            </div>
          </div>
          <div className="flex items-baseline space-x-2 lg:space-x-4">
            <span className="text-[#9d9d9d] text-sm lg:text-lg">03</span>
            <div className="w-full flex flex-col">
              <label
                htmlFor="email"
                className="block text-sm  text-white"
              >
                email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-4 block md:w-11/12 w-full px-3 py-4 border border-[#0f0f0f] active:border-[#91d1f8] rounded-[3px]"
                style={{ background: "#15191E" }}
              />
            </div>
          </div>
          <div className="flex items-baseline space-x-2 lg:space-x-4">
            <span className="text-[#9d9d9d] text-sm lg:text-lg">04</span>
                <div className="w-full flex flex-col">
            <label
              htmlFor="message"
              className="block text-sm text-white"
            >
              your-message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={7}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-4 block md:w-11/12 w-full px-3 py-4 border active:border-[#91d1f8] border-[#0f0f0f] rounded-[3px]"
              style={{ background: "#15191E" }}
            ></textarea>
            </div>
          </div>
          <div className="flex justify-start ml-7 md:ml-10">
          <button
            type="submit"
 style={{ background: "#101010e1" }}
        className="material-bubble3  hover:border-[#8eff86]  w-fit poppin  p-4 lg:px-4 rounded-[4px] border-[0.5px] border-[#6462628c] text-center text-sm flex mt-8 items-center justify-center transition-all duration-300"
          >
            submit-message <FiMail className="ml-2" />
          </button>
          </div>
        </form>
        {status && (
          <div className="px-4 md:ml-10 pb-6">
            <p
              className={`text-sm poppin py-2 px-4 rounded border ${
                status === "Sending..."
                  ? "text-blue-400 border-blue-400/30 bg-blue-400/10 italic animate-pulse"
                  : status === "success"
                  ? "text-[#8FFF86] border-[#8FFF86]/30 bg-[#8FFF86]/10"
                  : "text-red-400 border-red-400/30 bg-red-400/10"
              } transition-all duration-500`}
            >
              {status === "Sending..." 
                ? "Submitting your message..." 
                : status === "success" 
                ? "✓ Message received! I'll get back to you soon." 
                : "× Failed to send. Please check your connection or try again."}
            </p>
          </div>
        )}
      </div>
      <div className="mx-auto mt-0 flex justify-center">
        <LuminousBeam height="h-[170px]" color="ffd886" />
      </div>
    </div>
  );
};

export default ContactForm;
