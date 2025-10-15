"use client"

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We offer web development, mobile apps, SaaS solutions, UI/UX design, and growth strategy consulting tailored to your business needs. Our team specializes in end-to-end digital product development.",
      icon: "🎯"
    },
    {
      q: "What is your MVP development process?",
      a: "Our MVP process involves understanding your vision, defining key features, rapid prototyping, agile development, and iterative testing to launch quickly and validate ideas with real users.",
      icon: "🚀"
    },
    {
      q: "Why choose FreelanceStudio over other agencies?",
      a: "We focus on building results-driven digital experiences, combining creativity, technology, and strategy. With 18+ years of experience and a track record of 200+ successful projects, we deliver excellence.",
      icon: "⭐"
    },
    {
      q: "How do you measure project success?",
      a: "We measure success by client satisfaction, business goals achieved, user engagement metrics, and tangible ROI. Every project includes analytics and performance tracking.",
      icon: "📊"
    },
    {
      q: "How do you ensure the success of my digital product?",
      a: "Through user-centered design, continuous testing, data-driven decisions, and aligning the product with your business objectives. We validate assumptions early and iterate based on feedback.",
      icon: "✅"
    },
    {
      q: "Can you work with existing systems and equipment?",
      a: "Absolutely! We integrate seamlessly with your current systems and ensure smooth interoperability with existing tools, databases, and infrastructure. Legacy modernization is our specialty.",
      icon: "🔧"
    },
  ];

  const categories = [
    { name: "Services", count: 2 },
    { name: "Process", count: 2 },
    { name: "General", count: 2 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="flex px-8 flex-col lg:flex-row gap-16 max-w-7xl w-full">

        {/* Left Side - Vertically Centered */}
        <div className="flex flex-col justify-center lg:w-2/5 space-y-6">
          <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-xs font-semibold shadow-sm w-max">
            ❓ Got Questions?
          </div>

          <h1 className="text-7xl font-bold text-gray-900 leading-tight">
            Frequently <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Asked
            </span> <br />
            Questions
          </h1>

          <p className="text-base text-gray-600 leading-relaxed max-w-md">
            Do you have questions? Here are the most common answers about our services and how we work together to bring your vision to life.
          </p>

          

        </div>

        {/* Right Side - Enhanced Accordion */}
        <div className="flex-1 lg:w-3/5 space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:border-gray-300 group"
              >
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-gray-900 hover:no-underline [&[data-state=open]]:text-blue-600 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span>{item.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                  <div className="pl-14">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
            
          
        </div>

      </div>
    </section>
  );
}