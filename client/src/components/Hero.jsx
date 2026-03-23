import { useEffect, useState, useRef } from "react";

function Hero() {
  const text = "Initializing TSSec Security Layer...";
  const [display, setDisplay] = useState("");
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className={`fade-section ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl mb-6">TSSec Security Platform</h1>

        <p className="text-green-400 font-mono mb-4">{display}</p>

        <p className="text-gray-400 mb-6">
          built by T. Sai Sathwik — because creating secure systems felt more
          reliable than creating assignment submissions
        </p>

        {/* MAIN BOX */}
        <div className="border border-green-500/30 p-6 rounded-xl mt-10 font-mono text-green-400">
          &gt; system_status: SECURE <br />
          &gt; active_scans: 32 <br />
          &gt; threats_blocked: 124k+
        </div>

        {/* ✅ FIXED STATS (INSIDE RETURN) */}
        <div className="mt-16 text-center text-green-400 font-mono text-sm">
          124,392 threats blocked • 32 active scans • 99.99% uptime
        </div>
      </div>
    </section>
  );
}

export default Hero;
