import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="about py-10 md:p-32 text-center ">
        <div className="text-grey-500">Get to know</div>
        <div className="text-grey-900 text-5xl font-bold">About Me</div>
        <div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:gap-10 py-10"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img src="/sarjana.jpg" className="md:h-[480px] rounded-3xl" />
          <div className="py-2 flex flex-col gap-10">
            <div
              className="grid md:grid-cols-2 gap-5"
            >
              <div className="ring-1 rounded-lg p-10 flex flex-col gap-2 justify-center items-center" data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
                <img src="/education.png" className="h-20" />
                <div className="text-[25px] font-bold text-gray-900">
                  Education
                </div>
                <div className="text-[15px] font-bold text-gray-600">
                  Bachelor Degree
                </div>
                <div className="text-[15px] font-bold text-gray-600">
                  Public of Administration
                </div>
              </div>
              <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center" data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
                <img src="/experience.png" className="h-[80px]" />
                <div className="text-[25px] font-bold text-gray-900">
                  Experience
                </div>
                <div className="text-[15px] font-bold text-gray-600">
                  2 Years +
                </div>
                <div className="text-[15px] font-bold text-gray-600">
                  Staff of Administration
                </div>
              </div>
            </div>
            <div
              className="text text-[15px] text-gray-600 text-justify"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              I am a Public Administration Graduate from Sunan Gunung Djati
              State Islamic University Bandung, West Java, Indonesia. and
              graduated on June 28 2018 with a GPA of 3.25. I focus on
              Administration, Public Policy, and Public Services. I have high
              enthusiasm and dedication at work, am honest, easy to adapt to a
              new work environment, like to learn new things, and can work in a
              team. I have work experience in Administration in the Government
              Sector at the Regional Secretariat of Cianjur Regency as an
              honorary worker in the position of Administrative Support Staff
              starting from 02 June 2021 and until now
            </div>
          </div>
        </div>
      </div>
  )
}

export default About