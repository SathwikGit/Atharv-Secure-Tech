function CoreValues() {
  const values = [
    {
      title: "Transparency",
      icon: "🔍",
      text: "Open communication and honest reporting across all security operations.",
    },
    {
      title: "Innovation",
      icon: "⚡",
      text: "Continuous research and development of advanced cybersecurity solutions.",
    },
    {
      title: "Collaboration",
      icon: "🤝",
      text: "Working closely with partners and clients to strengthen security posture.",
    },
    {
      title: "Integrity",
      icon: "🛡️",
      text: "Maintaining the highest ethical and professional standards.",
    },
  ];

  return (
    <section id="values" className="py-28 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-teal-400">Core Values</h2>

          <p className="text-slate-400 mt-3">
            Principles that guide our cybersecurity philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#0b132b] to-[#020617] border border-slate-800 hover:border-teal-400 transition duration-300"
            >
              <div className="text-3xl mb-4">{v.icon}</div>

              <h3 className="font-semibold mb-3 text-lg group-hover:text-teal-400">
                {v.title}
              </h3>

              <p className="text-sm text-slate-400">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
