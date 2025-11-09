import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FiMail } from "react-icons/fi";
import './App.scss';
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
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
            <div className="mx-auto mt-4 flex justify-center">
              <LuminousBeam height="h-[170px]" color="ffd886"/>
            </div>
      <div className="tech2 backdrop-blur-md w-10/12 sm:w-11/12 md:w-7/12 lg:w-6/12 xl:9/12">
        <div className="about-me-title2 p-2">
          <p className="text-sm font-semibold">write-me</p>
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
        <form onSubmit={handleSubmit} className="space-y-6 p-6 flex flex-col md:ml-10">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-gray-200">
              <span className="text-[#9D9D9D] text-sm">01</span> full-name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-4 block md:w-11/12 w-full px-3 py-4 border border-[#494949] rounded-md focus:border-yellow-800"
              style={{ background: "#101010d3" }}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-gray-200">
              <span className="text-[#9D9D9D] text-sm">02</span> company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-4 block md:w-11/12 w-full px-3 py-4 border border-[#494949] rounded-md focus:border-yellow-800"
              style={{ background: "#101010d3" }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-200">
              <span className="text-[#9D9D9D] text-sm">03</span> email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-4 block md:w-11/12 w-full px-3 py-4 border border-[#494949] rounded-md focus:border-yellow-800"
              style={{ background: "#101010d3" }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-gray-200">
              <span className="text-[#9D9D9D] text-sm">04</span> your-message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={7}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-4 block md:w-11/12 w-full px-3 py-4 border border-[#494949] rounded-md focus:border-yellow-800"
              style={{ background: "#101010d3" }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ background: "#101010d3" }}
            className="material-bubble w-full md:w-7/12 lg:w-6/12 p-4 lg:px-4 rounded-md border border-[#494949] text-center text-sm flex items-center justify-center"
          >
            submit-message <FiMail className="ml-2" />
          </button>
        </form>
        {status && <p className="text-white mt-4">{status}</p>}
      </div>
       <div className="mx-auto mt-4 flex justify-center">
              <LuminousBeam height="h-[170px]" color="ffd886"/>
            </div>
    </div>
  );
};

export default ContactForm;
