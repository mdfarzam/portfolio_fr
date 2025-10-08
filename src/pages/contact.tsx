import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-50'>
      <div className="min-h-screen mb-4 mx-1 rounded-2xl bg-neutral-950 flex items-center px-18">
        <div className="flex flex-row w-full max-w-5xl justify-between gap-10">
          {/* Left Side - Form */}
          <div className="bg-white rounded-xl p-6 w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Do you have a project <br /> in mind?
            </h2>

            <form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label className="text-xs mb-1">Your Name*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs mb-1">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs mb-1">Message</label>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="bg-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white text-xs py-2 rounded-3xl mt-3 hover:bg-gray-800 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side - Smaller FAQ/Text Section */}
          <div className="flex flex-col justify-start text-white max-w-xl">
            <h1 className="text-5xl mb-2">Let's Connect</h1>
            <p className="text-sm text-gray-300">
              Tell us your vision — from web applications and SaaS to growth strategies.
            </p>

            {/* Thin white line */}
            <div className="bg-white h-px max-w my-4"></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
