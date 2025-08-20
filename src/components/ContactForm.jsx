import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | "loading"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    const now = new Date();
    const formattedTime = now.toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: "Nuevo mensaje desde el portfolio 💻",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: formattedTime, 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <section className="max-w-4xl w-full px-4 py-8 flex flex-col bg-gray-800 rounded-lg shadow-lg text-white mt-8 min-h-[428px]">
      <h2 className="text-2xl font-bold mb-4 text-left ml-4 text-white">
        Contact Me
      </h2>

      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={status === "loading" || formData.name === "" || formData.email === "" || formData.message === ""}
          className="p-3 bg-cyan-300 text-gray-800 cursor-pointer font-semibold rounded-xl shadow hover:bg-cyan-700 transition disabled:bg-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Mensajes animados */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="mt-4 text-green-500 font-medium text-center"
          >
          ¡Message sent!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="mt-4 text-red-500 font-medium text-center"
          >
            Error sending message. Please try again later.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
