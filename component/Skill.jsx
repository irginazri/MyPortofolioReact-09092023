import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Skill() {
  return (
    <div className="skill text-center p-10 md:p-32 gap-5 md:gap-10" id="experience">
        <div className="text-grey-500 text-lg">Get to know</div>
        <div className="text-grey-900 text-5xl font-bold">My Skill</div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:flex-row py-10 gap-5 md:gap-10"
        
        >
          <div className="ring-1 p-10 flex flex-col rounded-3xl justify-center items-center" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
            <div className="text-gray-900 text-3xl font-bold">
              Frontend Developer
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-10">
              <div className="flex p-5">
                <img src="/check.png" className="h-10 md:h-10" />
                <div className="flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-2xl font-semibold">HTML</div>
                </div>
              </div>
              <div className="flex p-5">
                <img src="/check.png" className="h-10 md:h-10" />
                <div className="flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-2xl font-semibold">CSS</div>
                </div>
              </div>
              <div className="flex p-5">
                <img src="/check.png" className="h-10 md:h-10" />
                <div className="flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-2xl font-semibold">
                    JAVASCRIPT
                  </div>
                </div>
              </div>
              <div className="flex p-5">
                <img src="/check.png" className="h-10 md:h-10" />
                <div className="flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-2xl font-semibold">
                    REACT JS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ring-1 p-10 flex flex-col rounded-3xl justify-center items-center" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
            <div className="text-gray-900 text-3xl font-bold">
              Administration
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10">
              <div className="flex p-5">
                <img src="/check.png" className="h-10" />
                <div className="flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-2xl font-bold">
                    Ms Word
                  </div>
                </div>
              </div>
              <div className="flex p-5">
                <img src="/check.png" className="h-10" />
                <div className="flex">
                  <div className="text-gray-900 text-2xl font-bold">
                    Ms Excel
                  </div>
                </div>
              </div>
              <div className="flex p-5">
                <img src="/check.png" className="h-10" />
                <div className="flex">
                  <div className="text-gray-900 text-2xl font-bold">
                    Googlesheet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skill