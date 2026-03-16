import { FaLinkedin } from "react-icons/fa";

function Team() {
  const founders = [
    {
      name: "Dr. Manish Kumar",
      initials: "MK",
      role: "Co-Founder & Director",
      specialization: "Cybersecurity Architecture, Cryptography",
      experience: "15+ years",
      org: "Associate Professor, Department of Mathematics, BITS Pilani Hyderabad Campus",
      linkedin: "https://www.linkedin.com/in/dr-manish-kumar-694019257/",
    },

    {
      name: "Mrs. Deepika Kesarwani",
      initials: "DK",
      role: "Director & Co-Founder",
      specialization: "M.Com in Commerce",
      experience: "6+ years",
      org: "GST Filing Expert",
      linkedin: "https://www.linkedin.com/in/deepika-kesarwani-92645a146/",
    },
  ];

  return (
    <section id="team" className="py-28 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-teal-400">Founders</h2>

          <p className="text-slate-400 mt-3">
            The leadership driving Atharv SecureTech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {founders.map((f, i) => (
            <div
              key={i}
              className="relative p-10 rounded-2xl border border-teal-700/30 bg-gradient-to-br from-[#07122a] to-[#020617] group"
            >
              {/* Avatar */}

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-black text-2xl font-bold">
                  {f.initials}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-2">
                {f.name}
              </h3>

              <p className="text-center text-teal-400 mb-3">{f.role}</p>

              <p className="text-center text-blue-400 text-sm">
                {f.specialization}
              </p>

              <p className="text-center text-slate-400 text-sm mt-1">
                {f.experience}
              </p>

              <p className="text-center text-slate-400 text-sm mt-3">{f.org}</p>

              {/* LinkedIn hover button */}

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition"
              >
                <FaLinkedin
                  size={28}
                  className="text-teal-400 hover:text-white"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
