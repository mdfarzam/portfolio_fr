"use client"

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      q: "What services do you offer?",
      a: "We offer web development, mobile apps, SaaS solutions, UI/UX design, and growth strategy consulting tailored to your business."
    },
    {
      q: "What is your MVP development process?",
      a: "Our MVP process involves understanding your vision, defining key features, rapid prototyping, development, and iterative testing to launch quickly and validate ideas."
    },
    {
      q: "Why choose Fabrica Studio over other agencies?",
      a: "We focus on building results-driven digital experiences, combining creativity, technology, and strategy to help businesses grow."
    },
    {
      q: "How do you rate your work?",
      a: "We measure success by client satisfaction, project goals achieved, usability, and business outcomes."
    },
    {
      q: "How do you ensure the success of my digital product?",
      a: "Through user-centered design, iterative testing, and aligning the product with your business objectives, we maximize the chances of success."
    },
    {
      q: "Can you work with existing systems and equipment?",
      a: "Yes! We integrate with your current systems and ensure smooth interoperability with existing tools and infrastructure."
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex px-22 flex-row gap-12 max-w-8xl w-full gap-60">

        {/* Left Side - Vertically Centered */}
        <div className="flex flex-col justify-center ">
          <span className="text-7xl">
            Frequently <br /> Asked <br /> Questions
          </span>
          <p className="text-xs p-2 text-gray-500">
            Do you have questions? Here are the most common <br /> answers about our services and how we work..
          </p>
        </div>

        {/* Right Side - Smaller Accordion */}
        <div className="flex-1 md:w-2/3 max-w-lg">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl bg-white border"
              >
                <AccordionTrigger className="px-4 py-2 text-lg text-black cursor-pointer transition-colors flex justify-between items-center hover:no-underline focus:no-underline">
                  {item.q}
                  <span>{/* optional icon */}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-2 text-black text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>


      </div>
    </section>
  );
}
