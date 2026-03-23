function About() {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 w-full">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl text-green-400 mb-6">SYSTEM OVERVIEW</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            TSSec is a modular cybersecurity platform designed for adaptive
            protection across cloud systems, IoT environments, and enterprise
            infrastructure.
          </p>

          <div className="space-y-2 font-mono text-green-400 text-sm">
            <p>&gt; real-time monitoring</p>
            <p>&gt; adaptive threat detection</p>
            <p>&gt; scalable architecture</p>
            <p>&gt; system-level protection</p>
          </div>
        </div>

        {/* RIGHT — VISUAL CARD */}
        <div className="border border-green-500/20 rounded-xl p-6 bg-black/40 backdrop-blur">
          <p className="text-green-400 mb-3">system_status.log</p>

          <div className="text-sm font-mono text-gray-300 space-y-2">
            <p>&gt; scanning network...</p>
            <p>&gt; analyzing traffic...</p>
            <p className="text-green-400">&gt; no threats detected</p>
            <p>&gt; monitoring active</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
