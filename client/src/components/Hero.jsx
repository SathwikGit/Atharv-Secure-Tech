function Hero() {
  return (
    <section className="grid-bg h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Next-Generation
          <br />
          <span className="text-teal-400">Cybersecurity Solutions</span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg">
          Protecting Cloud, IoT and Enterprise Infrastructure
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#services"
            className="px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 transition"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-teal-400 hover:bg-teal-400 hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
