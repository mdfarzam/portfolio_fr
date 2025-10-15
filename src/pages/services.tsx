"use client"
import React, { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "Web & Mobile Development",
      description: "From concept to launch, we build responsive, high-performance applications that scale with your business.",
      features: ["React & Next.js", "Native Mobile Apps", "Progressive Web Apps", "API Integration"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      number: "02",
      title: "Branding & Strategy",
      description: "Craft a memorable identity that resonates with your audience and sets you apart from the competition.",
      features: ["Brand Identity", "Visual Design", "Market Positioning", "Content Strategy"],
      gradient: "from-purple-500 to-pink-500",
      icon: "✨"
    },
    {
      number: "03",
      title: "SaaS Solutions",
      description: "End-to-end SaaS development from architecture to deployment, with ongoing support and optimization.",
      features: ["Cloud Infrastructure", "Scalable Backend", "Payment Integration", "Analytics & Monitoring"],
      gradient: "from-orange-500 to-red-500",
      icon: "🚀"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col px-8 py-24">
      {/* Header */}
      <div className="flex flex-row justify-between items-start gap-16 w-full max-w-7xl mx-auto mb-20">
        <div className="flex-1">
          <h2 className="text-8xl  text-gray-900 mb-4">Services.</h2>
          {/* <div className="w-110 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div> */}
        </div>
        <div className="text-sm text-gray-600 leading-relaxed pt-4 max-w-xs">
          <p className="mb-2 font-semibold text-gray-900">What We Offer</p>
          <p className="text-gray-500">
            Web and Mobile Development<br />
            Branding Consultancy<br />
            Build and Deploy SaaS
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* Number Badge */}
            <div className="absolute top-8 right-8 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
              {service.number}
            </div>

            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:underline transition-all`}>
                Learn More →
              </button>
            </div>

            {/* Hover Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
          </div>
        ))}
      </div>


      
    </div>
  );
};

export default Services;