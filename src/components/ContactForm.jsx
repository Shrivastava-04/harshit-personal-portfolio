import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateData = validate();
    if (Object.keys(validateData).length > 0) {
      setErrors(validateData);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_pd8ruul",
          "template_htfnkyg",
          formData,
          "U7XaMNTJC1Cexj9-D"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
      <div className="mx-auto max-w-3xl p-4" id="contact">
        <Toaster />
        <h2 className="my-8 text-center text-4xl tracking-tighter font-semibold">
          Let's Connect
        </h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            />
            {errors.name && (
              <motion.p
                initial={{ opacito: 0 }}
                whileInView={{ opacito: 1 }}
                aria-live="polite"
                className="text-pink-700 text-sm"
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            />
            {errors.email && (
              <motion.p
                initial={{ opacito: 0 }}
                whileInView={{ opacito: 1 }}
                aria-live="polite"
                className="text-pink-700 text-sm"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
              rows="4"
            ></textarea>
            {errors.message && (
              <motion.p
                initial={{ opacito: 0 }}
                whileInView={{ opacito: 1 }}
                aria-live="polite"
                className="text-pink-700 text-sm"
              >
                {errors.message}
              </motion.p>
            )}
          </div>
          <button
            type="submit"
            className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </div>
    </>
  );
};

export default ContactForm;
