import { FaLinkedin } from "react-icons/fa";

function Team() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-green-400 mb-10">[ OPERATORS ]</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl mb-2">T. Sai Sathwik</h3>
            <p className="text-green-400 text-sm mb-3">Founder & Developer</p>
            <p className="text-gray-400 text-sm">
              Designing modular cybersecurity systems with performance focus.
            </p>

            <a
              href="https://www.linkedin.com/in/saisathwikt/"
              target="_blank"
              className="absolute top-4 right-4 text-green-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
