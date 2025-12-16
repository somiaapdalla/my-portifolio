import React from "react";
import imageight from "../assets/imgeight.png"; 
import imageten from "../assets/imageten.jpeg"; 
import Skills from "./skills";
import Projects from "./project";
import AboutMe from "./aboutme";

function Home() {
  return <>
    <section
      id="home"
      className="bg-slate-900 text-white min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10">

        {/* النص */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-400">Sumaya <br /> Abdullahi Mohamed</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-6">
            I'm a Full Stack Developer and Computer Science student <br /> at Zamzam University of Science and Technology.  
            I specialize <br /> in building responsive and user-friendly web applications and hold a Full Stack Development certification.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
            >
              Contact Me
            </a>
            <a
              href="/assets/yourCV.pdf" // ضع رابط CV هنا
              target="_blank"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-md transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* الصورة */}
        <div>
          <img
            src={imageten}
            alt="Sumaya Abdullahi Mohamed"
            className="w-64 md:w-80 rounded-2xl shadow-lg mx-auto"
          />
        </div>

       
      </div>
    </section>
    <AboutMe />
    <Skills />
    <Projects />
    </>

  
}

export default Home;
