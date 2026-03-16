import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = scrolled
    ? "fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800"
    : "fixed top-0 left-0 w-full z-50 bg-transparent";

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-semibold">
          Atharv <span className="text-teal-400">SecureTech</span>
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-teal-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-teal-400 transition">
            Services
          </a>
          <a href="#team" className="hover:text-teal-400 transition">
            Team
          </a>
          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
