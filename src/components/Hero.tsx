import React, { useEffect, useState } from "react";
import { animate } from "animejs";
import stars from "../assets/images/bgImage.jpg";

const Hero: React.FC = () => {
  const [animay, setAnimay] = useState(false);

  useEffect(() => {
    animate("h1", {
      scale: [
        { to: 2.3, duration: 400 },
        { to: 1, duration: 400 },
      ],
      easing: "ease-in-out",
      duration: 800,
      loop: false,
    });

    const timer = setTimeout(() => {
      setAnimay(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center text-white"
    >
      {/* Background image layer with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url(${stars})`,
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg transform transition-all duration-1000 ease-out ${
            animay ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Hi Im John Carlo
        </h1>
        <p
          className={`text-base sm:text-lg md:text-2xl mb-10 text-gray-200 drop-shadow-md transition-all duration-1000 ease-out delay-200 ${
            animay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I build clean, responsive websites and web apps using modern tools.
        </p>
      </div>
    </section>
  );
};

export default Hero;
