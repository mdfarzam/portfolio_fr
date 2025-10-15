"use client"
import React, { useState } from 'react'

const Mvp = () => {
    const [activeStep, setActiveStep] = useState(0);

    const process = [
        {
            phase: "01",
            title: "Discovery & Strategy",
            duration: "Week 1-2",
            description: "We dive deep into your vision, market, and user needs to create a solid foundation.",
            activities: [
                "Stakeholder interviews",
                "Competitive analysis",
                "User persona development",
                "Feature prioritization"
            ],
            deliverable: "Product roadmap & technical specification",
            color: "from-blue-500 to-cyan-500"
        },
        {
            phase: "02",
            title: "Design & Prototyping",
            duration: "Week 3-4",
            description: "Transform ideas into interactive prototypes that users can actually experience.",
            activities: [
                "Wireframing & user flows",
                "High-fidelity mockups",
                "Interactive prototypes",
                "Usability testing"
            ],
            deliverable: "Clickable prototype & design system",
            color: "from-purple-500 to-pink-500"
        },
        {
            phase: "03",
            title: "Development Sprint",
            duration: "Week 5-10",
            description: "Agile development with weekly check-ins to ensure we're building exactly what you need.",
            activities: [
                "Frontend development",
                "Backend architecture",
                "API integration",
                "Quality assurance"
            ],
            deliverable: "Functional MVP ready for testing",
            color: "from-orange-500 to-red-500"
        },
        {
            phase: "04",
            title: "Launch & Optimize",
            duration: "Week 11-12",
            description: "Deploy your MVP and gather real user feedback to iterate and improve.",
            activities: [
                "Deployment & monitoring",
                "User onboarding",
                "Analytics setup",
                "Performance optimization"
            ],
            deliverable: "Live product with support & documentation",
            color: "from-green-500 to-emerald-500"
        }
    ];

    const stats = [
        { value: "20+", label: "Years Experience" },
        { value: "€15M", label: "Campaign Investment" },
        { value: "150+", label: "Apps Launched" },
        { value: "98%", label: "Success Rate" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col px-8 py-24">
            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto mb-20">
                <h1 className="text-7xl text-gray-900 leading-tight mb-6">
                    Creating digital experiences<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        that deliver results
                    </span>
                </h1>
                <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
                    Discover how 20+ years of experience and €15M invested in campaigns combine to build powerful digital solutions that scale.
                </p>

                
            </div>

            {/* Process Timeline */}
            <div className="w-full max-w-7xl mx-auto mb-20">

                {/* Interactive Timeline */}
                <div className="space-y-8">
                    {process.map((step, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 border-2 ${
                                activeStep === idx 
                                    ? 'border-gray-300 shadow-2xl scale-[1.02]' 
                                    : 'border-gray-100 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left: Phase Info */}
                                <div className="flex-shrink-0">
                                    <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-2`}>
                                        {step.phase}
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">{step.duration}</div>
                                </div>

                                {/* Middle: Content */}
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                                    {/* Activities Grid */}
                                    <div className={`grid grid-cols-2 gap-3 mb-6 transition-all duration-300 ${
                                        activeStep === idx ? 'opacity-100' : 'opacity-70'
                                    }`}>
                                        {step.activities.map((activity, aIdx) => (
                                            <div key={aIdx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                                                <span>{activity}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deliverable */}
                                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10 backdrop-blur-sm border border-gray-200`}>
                                        <span className="text-sm font-semibold text-gray-900">
                                            ✓ {step.deliverable}
                                        </span>
                                    </div>
                                </div>

                                {/* Right: Visual Element */}
                                <div className="flex-shrink-0 w-32 h-32 hidden lg:block">
                                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.color} opacity-20`}></div>
                                </div>
                            </div>

                            {/* Connection Line */}
                            {idx < process.length - 1 && (
                                <div className="absolute left-12 -bottom-8 w-1 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            
            

            

        </div>
    )
}

export default Mvp