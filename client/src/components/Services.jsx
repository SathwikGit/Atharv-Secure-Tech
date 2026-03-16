function Services() {
  const services = [
    {
      title: "IoT Security",
      icon: "🔐",
      text: "Protect IoT ecosystems from vulnerabilities, device tampering, and unauthorized access.",
    },

    {
      title: "Cloud Security",
      icon: "☁️",
      text: "Secure cloud infrastructure using encryption, threat monitoring, and compliance frameworks.",
    },

    {
      title: "Threat Detection",
      icon: "🛡️",
      text: "Real-time detection and response to cyber threats across networks and digital systems.",
    },

    {
      title: "Security Audits",
      icon: "🔎",
      text: "Comprehensive vulnerability assessments and penetration testing.",
    },

    {
      title: "System Integration",
      icon: "🚀",
      text: "Seamless integration of security solutions into enterprise systems.",
    },

    {
      title: "IPR Protection",
      icon: "📑",
      text: "Protection and management of intellectual property assets.",
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-teal-400">Our Services</h2>

          <p className="text-slate-400 mt-3">
            Advanced cybersecurity solutions for modern enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#0b132b] to-[#020617] border border-slate-800 hover:border-teal-400 transition duration-300"
            >
              <div className="text-3xl mb-5">{s.icon}</div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-teal-400">
                {s.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
