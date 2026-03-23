import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Overview" },
    { id: "services", label: "Modules" },
    { id: "team", label: "Operators" },
    { id: "contact", label: "Contact" },
  ];

  // TRACK ACTIVE SECTION
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // NAVIGATION FIX
  const handleNav = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-24 border-r border-green-900 flex flex-col items-center py-6 bg-black/80 backdrop-blur-md z-50">
      {/* GLOW EDGE */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-green-500 opacity-40"></div>

      {/* LOGO */}
      <div className="text-green-400 font-bold rotate-90 origin-left text-lg tracking-widest">
        TSSec
      </div>

      {/* NAV */}
      <div className="relative flex flex-col gap-8 text-sm mt-20">
        {/* ACTIVE INDICATOR LINE */}
        <div
          className="absolute left-[-10px] w-[3px] bg-green-400 transition-all duration-300"
          style={{
            top: `${navItems.findIndex((i) => i.id === active) * 40}px`,
            height: "20px",
          }}
        />

        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNav(item.id)}
            className={`cursor-pointer transition-all duration-200 ${
              active === item.id
                ? "text-green-400 scale-110"
                : "text-gray-500 hover:text-green-400 hover:translate-x-1"
            }`}
          >
            {item.label}
          </div>
        ))}

        {/* ADMIN */}
        <Link
          to="/admin"
          className="text-yellow-400 mt-10 hover:text-white hover:translate-x-1 transition"
        >
          Admin
        </Link>
      </div>

      {/* FOOTER */}
      <div className="mt-auto mb-6 text-[11px] text-green-500 rotate-90 tracking-widest opacity-70 hover:opacity-100 transition">
        2020B4A71567H
      </div>
    </div>
  );
}

export default Navbar;
