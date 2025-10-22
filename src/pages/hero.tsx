import React from "react";
import Iridescence from "@/components/Iridescence";
import { Zap, Gem, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden rounded-2xl bg-neutral-950 flex flex-col mt-1 mx-1">
      {/* Background */}
      <Iridescence
        color={[0.9, 0.8, 0.86]}
        mouseReact={false}
        amplitude={0.1}
        speed={0.9}
        className="absolute inset-0"
      />

      <div className="relative z-10 flex flex-row items-start justify-between w-full h-full px-8 py-16 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          {/* Badge */}
          <div className="inline-block backdrop-blur-sm bg-white/10 px-8 py-3 rounded-full border border-white/20 text-white text-lg font-semibold shadow-lg w-max tracking-wide">
           Pixel Perfect Solutions
          </div>


          <p className="text-sm uppercase font-bold tracking-widest text-white/70 drop-shadow-sm">
            Design · Develop · Deliver
          </p>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <div className="text-8xl font-bold text-white drop-shadow-sm">
              <div>We Craft Digital</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white/95 to-blue-300/95">Masterpieces</div>
            </div>

            {/* Subtext */}
            <p className="text-xl tracking-tight text-white/90 leading-tight max-w-xl drop-shadow-sm">
              Elevate your brand with stunning web experiences that convert visitors into loyal customers.
            </p>
          </div>

          <button className="w-max text-white text-lg px-6 py-2 rounded-2xl text-lg backdrop-blur-md bg-white/10 border border-white/40 shadow-md">
            Elevate your presence
          </button>

          {/* Feature Icons */}
          <div className="flex gap-8 mt-4 mb-18">
            {[
              { icon: <Zap className="w-5 h-5 text-white" />, title: "Fast Delivery", desc: "2–4 week turnaround" },
              { icon: <Gem className="w-5 h-5 text-white" />, title: "Premium Quality", desc: "Award-winning designs" },
              { icon: <Rocket className="w-5 h-5 text-white" />, title: "Scalable Solutions", desc: "Grow without limits" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-blue-200 font-semibold text-sm drop-shadow-sm">
                    {item.title}
                  </p>
                  <p className="text-white text-xs drop-shadow-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer text */}
          <div className="absolute bottom-4 left-40 transform -translate-x-1/2">
            <div className="flex items-center gap-3 text-white/70">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
              </div>
              <p className="text-xs tracking-wider uppercase text-white/90">
                Est. 2025 • Remote First • 24/7 Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (cards) */}
        <div className="flex flex-col gap-6 mt-12 w-72 relative">
          <div className="flex flex-col gap-6">
            {/* Testimonial */}
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-md w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white/95 to-blue-200/95 font-semibold text-sm drop-shadow-sm">Sarah Johnson</p>
                  <p className="text-white/80 text-xs drop-shadow-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-white/90 text-sm italic drop-shadow-sm">
                "Transformed our online presence completely. Incredible work!"
              </p>
              <div className="flex gap-1 mt-3 text-yellow-300">
                {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>

            {/* Recent Launch */}
            <div className="backdrop-blur-md bg-white/10 p-5 rounded-2xl border border-white/20 shadow-md w-full">
              <div className="flex justify-between items-center mb-3">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-white to-blue-50 text-xs uppercase tracking-wider drop-shadow-sm">Recent Launch</p>
                <span className="text-green-100 text-sm">● Live</span>
              </div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-white to-blue-50 font-semibold mb-2 drop-shadow-sm">E-commerce Platform</p>
              <div className="h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg mb-3"></div>
              <p className="text-white/80 text-xs drop-shadow-sm">150% increase in conversions</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="absolute -bottom-25 right-2 flex items-center gap-6 text-white">
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-white transition-colors text-sm font-light tracking-wider">
                X
              </a>
              <div className="h-6 w-px bg-white/20"></div>
              <a href="#" className="text-white hover:text-white transition-colors text-sm font-light tracking-wider">
                Instagram
              </a>
              <div className="h-6 w-px bg-white/20"></div>
              <a href="#" className="text-white hover:text-white transition-colors text-sm font-light tracking-wider">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col gap-6 items-center z-10">
  <h2 className="text-white text-2xl font-bold mb-4">What We Do</h2>
  <div className="flex gap-10 flex-wrap justify-center items-center">
    {[
      { label: "Web Development", icon: "💻" },
      { label: "UI/UX Design", icon: "🎨" },
      { label: "Brand Identity", icon: "⭐" },
    ].map((service, i) => (
      <div key={i} className="text-center flex flex-col items-center gap-2">
        <div className="text-3xl">{service.icon}</div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white/95 to-blue-300/95 text-xl font-semibold drop-shadow-sm">
          {service.label}
        </div>
      </div>
    ))}
  </div>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-white/5 to-transparent rounded-full -z-0"></div>
</div>


    </div>
  );
};

export default Hero;
