function MissionVision() {
  return (
    <section className="bg-[#050b1f] py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl text-center font-semibold mb-16">
          Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}

          <div className="p-10 rounded-2xl bg-[#0b132b] border border-teal-500/30">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Our Mission
            </h3>

            <p className="text-slate-400 leading-relaxed">
              To empower organizations with advanced cybersecurity solutions
              that protect digital infrastructure, ensure business continuity,
              and enable secure innovation.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-400">
              <li>• Deliver cutting-edge security solutions</li>
              <li>• Conduct advanced cybersecurity research</li>
              <li>• Build trusted partnerships</li>
              <li>• Stay ahead of emerging cyber threats</li>
            </ul>
          </div>

          {/* Vision */}

          <div className="p-10 rounded-2xl bg-[#0b132b] border border-indigo-500/30">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Our Vision
            </h3>

            <p className="text-slate-400 leading-relaxed">
              To become a trusted global cybersecurity partner driving
              innovation and building a secure digital future.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-400">
              <li>• Lead industry innovation</li>
              <li>• Set new security standards</li>
              <li>• Create a cyber-secure world</li>
              <li>• Empower teams globally</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
