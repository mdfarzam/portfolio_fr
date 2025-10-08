import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
    <div className=" flex flex-col md:flex-row items-center justify-between min-h-[60vh] mx-22 rounded-2xl bg-neutral-950 text-white px-10 py-16 gap-10">
      {/* Left Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src="/team.png"
          alt="Team"
          className="rounded-2xl w-full max-w-md object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-4">
        <span className="text-gray-400 text-sm tracking-wide uppercase">
        ✦ Meet the Team
        </span>
        <h1 className="text-5xl font-bold">FreelanceStudio</h1>
        <p className="text-lg text-gray-300 font-medium">
          Expert Web Dev Agency
        </p>
        <p className="text-gray-400 leading-relaxed text-sm max-w-md">
          Over 18 years building digital products for multinationals and
          startups. From MVPs to SaaS platforms, rebranding to growth
          marketing—helping businesses succeed digitally.
        </p>

        {/* White connect button */}
        <button className="bg-white text-black text-sm px-5 py-2 rounded-full w-fit mt-4 hover:bg-gray-200 transition">
          Connect
        </button>
      </div>
    </div>
    </div>
  );
};

export default About;
