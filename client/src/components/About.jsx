function About() {
  const features = [
    {
      title: "Advanced Security",
      icon: "🛡️",
      text: "State-of-the-art protection mechanisms for modern digital infrastructure.",
    },

    {
      title: "Research Driven",
      icon: "🔬",
      text: "Continuous innovation powered by cybersecurity research and threat analysis.",
    },

    {
      title: "High Performance",
      icon: "⚡",
      text: "Security solutions designed with minimal system overhead.",
    },

    {
      title: "Global Standards",
      icon: "🌍",
      text: "Aligned with international cybersecurity frameworks and compliance models.",
    },
  ];

  return (
    <section id="about" className="py-28 text-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}

        <div>
          <h2 className="text-4xl font-semibold text-teal-400 mb-6">
            About Atharv SecureTech
          </h2>

          <p className="text-slate-400 leading-relaxed text-lg">
            Atharv SecureTech is a research-driven cybersecurity organization
            focused on securing cloud systems, IoT devices, and modern digital
            infrastructure. Our mission is to develop security solutions that
            combine academic research with real-world threat intelligence.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0b132b] to-[#020617] border border-slate-800 hover:border-teal-400 transition duration-300"
            >
              <div className="text-3xl mb-3">{f.icon}</div>

              <h4 className="font-semibold mb-2">{f.title}</h4>

              <p className="text-sm text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
