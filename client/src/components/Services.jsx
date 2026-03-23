function Services() {
  const modules = [
    "scan --threats",
    "secure --cloud",
    "protect --iot",
    "audit --system",
    "integrate --security",
  ];

  return (
    <section id="services">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-green-400 mb-10">EXECUTABLE MODULES</h2>

        <div className="space-y-4">
          {modules.map((m, i) => (
            <div
              key={i}
              className="border border-gray-800 p-5 rounded-lg font-mono text-green-400 hover:border-green-400"
            >
              &gt; {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
