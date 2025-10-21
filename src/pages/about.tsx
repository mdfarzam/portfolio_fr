import React from "react";

const About = () => {
  const stats = [
    { value: "Fresh Ideas", label: "Creative Thinking" },
    { value: "Big Ambitions", label: "Growth Mindset" },
    { value: "50+", label: "Global Clients" },
    { value: "15+", label: "Team Members" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      desc: "We're passionate about creating digital solutions that make a real impact"
    },
    {
      icon: "⚡",
      title: "Fast & Agile",
      desc: "Quick turnarounds without compromising on quality or attention to detail"
    },
    {
      icon: "🤝",
      title: "Partnership",
      desc: "Your success is our success. We work as an extension of your team"
    }
  ];

  const expertise = [
    "Web Development",
    "Mobile Apps",
    "SaaS Platforms",
    "E-commerce",
    "Brand Identity",
    "Growth Marketing",
    "UI/UX Design",
    "Cloud Solutions"
  ];

  return (
    <div className="bg-gray-50 py-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] mx-1 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white px-12 py-16 gap-12 shadow-2xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        {/* Left Image */}
        <div className="relative flex justify-center md:w-1/2 z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team"
              className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
            />
            {/* Floating badge */}
            
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-col justify-center md:w-1/2 space-y-6 z-10">
          <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold flex items-center gap-2">
            ✦ Meet the Team
          </span>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
             pixel perfect solutions
          </h1>
          <p className="text-2xl text-gray-300 font-semibold">
            Expert Web Dev Agency
          </p>
          <p className="text-gray-400 leading-relaxed text-base max-w-lg">
            We create impactful digital solutions for businesses, from websites and apps to branding and growth strategies. Helping startups and small businesses succeed online.
          </p>

          {/* Stats mini grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-white">{stats.value}</div>
                {stat.label && <div className="text-sm text-white/70">{stat.label}</div>}
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-white text-black text-base font-semibold px-8 py-4 rounded-full w-fit mt-4 hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Let's Connect →
          </button>
        </div>
      </div>
      

      {/* Team Culture Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-transparent rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Remote-First, Globally Connected</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our distributed team brings together the best talent from around the world. 
              We believe great work happens when people have the freedom to work from anywhere, 
              at their peak productivity hours.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">🌍worldwide </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">⏰ 24/7 Coverage</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">🚀 Agile Workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;