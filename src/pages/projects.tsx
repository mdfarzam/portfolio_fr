'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Projects = () => {
  const containerRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)


  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ['7%', '-46%'])

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold text-gray-900 mb-4">Projects.</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
              Explore our portfolio of innovative solutions that have transformed businesses and delighted users
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-12 justify-center mt-12"
          >
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '98%', label: 'Success Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center py-8 bg-gray-50">
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          <span>Scroll to explore</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="h-[480vh] relative">
        <div className="sticky top-4 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-8"
          >
            {projectsData.map((project, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative flex flex-col bg-white border-2 border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[600px] h-[520px] shrink-0 overflow-hidden group"
                whileHover={{ y: -8 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0 pointer-events-none`}></div>

                {/* Project number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-lg z-20">
                  <span className="text-lg font-bold text-gray-900">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg">
                    <span className="text-xs font-semibold text-gray-900">{project.status}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative py-6 px-8 flex flex-col justify-between flex-1 z-10">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h1 className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.title}
                      </h1>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                      <h2 className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {project.date}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className={`flex-1 bg-gradient-to-r ${project.gradient} text-white text-sm px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}>
                      View Live
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-900 text-sm rounded-full hover:bg-gray-200 transition-colors font-semibold border border-gray-200">
                      Source
                    </button>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}

            {/* End card - CTA */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl w-[600px] h-[520px] shrink-0 overflow-hidden relative p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-4xl font-bold text-white mb-4">Have a Project?</h3>
                <p className="text-gray-300 mb-8 max-w-md">
                  Let's collaborate and create something extraordinary together
                </p>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Interested in working together?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always excited to take on new challenges and help bring ideas to life
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all">
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  )
}

// Project Data
const projectsData = [
  {
    title: 'Insider Ai',
    date: 'April 2023 - May 2023',
    description:
      'Developed this blah blah developed this blah blah developed this blah blah. This project showcases advanced AI capabilities with modern web technologies.',
    stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    status: 'Live',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Chat Collect',
    date: 'Jan 2024 - Feb 2024',
    description:
      'With the release of the OpenAI GPT Store, I decided it would be valuable to allow users to collect email addresses from their GPT users.',
    stack: ['TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    status: 'Active',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'LLM Report',
    date: 'April 2023 - September 2023',
    description:
      'Developed an open-source logging and analytics platform for OpenAI. Log your ChatGPT API requests, analyze costs, and improve your prompts.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    status: 'Open Source',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Portfolio 3D',
    date: 'March 2024 - Present',
    description:
      'A modern 3D portfolio website built with Three.js and React. Features interactive animations and immersive visual experiences.',
    stack: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    status: 'In Development',
    gradient: 'from-green-500 to-emerald-500'
  },
]

export default Projects