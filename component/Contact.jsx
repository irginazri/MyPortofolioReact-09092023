import React from 'react'

function Contact() {
  return (
    <div className="contact bg-gray-100 p-20 md:p-10 text-center">
        <div className="text-gray-500 text-lg">to</div>
        <div className="text-gray-900 text-5xl font-bold">Contact</div>
        <div className="flex justify-center items-center p-10">
          <div className="ring-1 rounded-3xl p-5 flex gap-10 bg-gray-100">
            <div className="flex justify-center items-center gap-1">
              <img src="/mail.png" className="h-5 md:h-10" />
              <div className="text-[10px] md:text-3xl text-semi-bold">irginazri@gmail.com</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src="/linkedin.png" className="h-5 md:h-10" />
              <div className="text-[10px] md:text-3xl text-semi-bold">
                linkedin.com/in/irginazri
              </div>
            </div>
          </div>
        </div>
        <div className="text-[13px] md:text-xl text-gray-600">
          Copyright © Irgi Nazri Adlani. All Right Reserved
        </div>
      </div>
  )
}

export default Contact