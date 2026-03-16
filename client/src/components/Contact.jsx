import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-teal-400">Get In Touch</h2>

          <p className="text-slate-400 mt-3">
            Have a security question or project? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT CONTACT INFO */}

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#0b132b] border border-slate-800">
              <h4 className="text-sm text-slate-400 mb-1">EMAIL</h4>
              <p className="text-lg">director@atharvsecuretech.com</p>
            </div>

            <div className="p-6 rounded-xl bg-[#0b132b] border border-slate-800">
              <h4 className="text-sm text-slate-400 mb-1">PHONE</h4>
              <p className="text-lg">+91 98765 43210</p>
            </div>

            <div className="p-6 rounded-xl bg-[#0b132b] border border-slate-800">
              <h4 className="text-sm text-slate-400 mb-1">ADDRESS</h4>

              <p className="text-lg leading-relaxed">
                BITS Hyderabad Campus <br />
                Secunderabad, Telangana 500078
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="p-8 rounded-2xl bg-[#0b132b] border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-slate-700 focus:outline-none focus:border-teal-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-slate-700 focus:outline-none focus:border-teal-400"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-[#020617] border border-slate-700 focus:outline-none focus:border-teal-400"
              />

              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-slate-700 focus:outline-none focus:border-teal-400"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-slate-400 mt-3">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
