import React from "react";
import { Smartphone, Palette, Cloud } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col p-22">
      {/* Header */}
      <div className="flex flex-row justify-between gap-16 w-full max-w-7xl mx-auto">
        <span className="text-8xl">Services.</span>
        <span className="text-xs pt-10">
          Web and Mobile Development<br />
          Branding Consultancy<br />
          Build and Deploy SaaS
        </span>
      </div>

      {/* Service Boxes */}
      {/* <div className="relative w-full w-8xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 text-black">
      

      
        <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-px bg-gray-200"></div>
        <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-px bg-gray-200"></div>



        <div className="flex flex-col p-12 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Web & Mobile Development</h2>
            <Smartphone className="w-6 h-6" strokeWidth={1.3} />
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Custom-built websites and mobile apps</li>
            <li>Responsive, fast, and SEO-friendly design</li>
            <li>Integration with modern tools and APIs</li>
            <li>Optimized for performance and usability</li>
          </ul>
        </div>



        <div className="flex flex-col p-12 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Branding Consultancy</h2>
            <Palette className="w-6 h-6" strokeWidth={1.3} />
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Brand identity and visual systems</li>
            <li>Logo, color palette, and typography design</li>
            <li>Voice, tone, and storytelling strategy</li>
            <li>Brand consistency across all touchpoints</li>
          </ul>
        </div>



        <div className="flex flex-col p-12 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Build & Deploy SaaS</h2>
            <Cloud className="w-6 h-6" strokeWidth={1.3} />
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>From MVP to scalable SaaS platforms</li>
            <li>Secure cloud infrastructure and CI/CD</li>
            <li>Integration with AI and automation tools</li>
            <li>Ongoing support and performance optimization</li>
          </ul>
        </div>
      </div> */}

    </div>
  );
};

export default Services;
