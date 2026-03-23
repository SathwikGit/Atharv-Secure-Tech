import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

/* MAIN WEBSITE */
function MainSite() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <About />
      <Services />
      <MissionVision />
      <CoreValues />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

/* LOGIN COMPONENT */
function Login({ setIsAdmin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (user === "Sathwik_T" && pass === "Sathwik#2003") {
      setIsAdmin(true);
    } else {
      setError("invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="border border-gray-800 p-8 rounded-xl w-80">
        <h2 className="text-green-400 mb-4">Admin Login</h2>

        <input
          placeholder="username"
          className="w-full p-2 mb-3 bg-black border border-gray-700"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          className="w-full p-2 mb-3 bg-black border border-gray-700"
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-green-500 w-full py-2 text-black"
        >
          login
        </button>

        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>
    </div>
  );
}

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Navbar />

      <div className="ml-24">
        <Routes>
          {/* MAIN SITE */}
          <Route path="/" element={<MainSite />} />

          {/* ADMIN ROUTE */}
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <Login setIsAdmin={setIsAdmin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
