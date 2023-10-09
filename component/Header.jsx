import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Header() {
  return (
    <header
      className="header py-20 grid grid-cols-1 md:grid-cols-2"
      style={{
        backgroundImage: "url(/bg1.png)",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        className="p-10 md:p-32 flex justify-center items-start"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <img
          src="/irgi.png"
          className="h-[300px] md:h-[400px] shadow-xl rounded-full"
        ></img>
      </div>

      <div className="p-5 md:p-32 flex justify-center items-center flex-col gap-2">
        <div className="text-4xl md:text-5xl font-bold text-gray-700">
          Hello I'm
        </div>
        <div className="text-5xl md:text-5xl font-bold text-gray-900">
          <h1>
            <span>
              <TypeWriterEffect
                textStyle={{
                  color: "rgb(194 65 12)",
                  fontWeight: 1000,
                  fontSize: "70px",
                  textAlign: "center",
                }}
                startDelay={500}
                cursorColor="#3F3D56"
                multiText={["IRGI NAZRI ADLANI"]}
                multiTextDelay={1000}
                typeSpeed={90}
              />
            </span>
          </h1>
        </div>
        <div className="text-2xl font-bold text-gray-700">
          Frontend Developer
        </div>
        <div className="flex gap-2">
          <a href="https://drive.google.com/file/d/1DY_who4ZUBMLp-Duio91aUVXdSKm9_n8/view?usp=drive_link">
            <button className="ring-1 border p-3 rounded-full px-6 hover:bg-orange-900 hover:text-white transition md:z-auto">
              Download CV
            </button>
          </a>
          <a href="https://www.linkedin.com/in/irginazri">
            <button className="bg-orange-700 text-white border p-3 rounded-full px-6 hover:bg-orange-900 transition">
              Contact
            </button>
          </a>
        </div>
        <div className="p-2 flex gap-2">
          <a href="https://www.linkedin.com/in/irginazri"><img src="/linkedin.png" className="h-10 hover:bg-orange-900 transition hover:rounded-full" /></a>
          <a href="https://github.com/irginazri"><img src="/github.png" className="h-10 hover:bg-orange-900 transition hover:rounded-full" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
