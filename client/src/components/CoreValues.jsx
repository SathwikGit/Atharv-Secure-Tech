import { useState, useRef, useEffect } from "react";

function CoreValues() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  const principles = [
    ["zero_trust_architecture", "> enforcing zero trust..."],
    ["fail_safe_defaults", "> applying safety..."],
    ["continuous_monitoring", "> tracking activity..."],
    ["least_privilege_access", "> limiting access..."],
    ["defense_in_depth", "> layered defense active..."],
  ];

  return (
    <section ref={ref} className={`fade-section ${visible ? "visible" : ""}`}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-green-400 mb-8">SYSTEM PRINCIPLES</h2>

        <div className="space-y-3">
          {principles.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="border border-gray-800 px-5 py-3 rounded-lg font-mono text-green-400 hover:border-green-400"
            >
              {hoverIndex === i ? p[1] : p[0]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
