import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setErrorMessage("");

    emailjs
      .send(
        "service_moh6qq8",
        "template_icxeifw",
        {
          from_name: form.name,
          to_name: "A. Gunawan Wibisono",
          from_email: form.email,
          to_email: "gunwanwbs87@gmail.com",
          message: form.message,
        },
        "06hsbcbqF23RPc1ih"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setLoading(false);
        setStatus("error");
        setErrorMessage(error.text || "Failed to send message.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-secondary text-sm uppercase tracking-wider">
          Get in touch
        </p>

        <h3 className="text-white text-3xl font-bold mt-2">
          Contact Me
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
          />

          <button
            type="submit"
            className="bg-primary py-3 px-8 rounded-xl text-white font-bold hover:opacity-80 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <p className="text-green-500 font-medium mt-4">
              ✅ Message sent successfully!
            </p>
          )}

          {/* ERROR MESSAGE */}
          {status === "error" && (
            <p className="text-red-500 font-medium mt-4">
              ❌ Failed to send message. {errorMessage}
            </p>
          )}
        </form>

        {/* SOCIAL BUTTON */}
        <div className="mt-10 pt-8 border-t border-secondary flex flex-wrap gap-4">

          <a
            href="https://wa.me/6281803838454"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:gunwanwbs87@gmail.com"
            className="bg-[#EA4335] px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/agunawanwibisono"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333] px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

        </div>

      </motion.div>

      {/* RIGHT SIDE - EARTH */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="xl:flex-1 h-[500px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");