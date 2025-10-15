"use client"
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'MVP', href: '#mvp' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop- py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-center items-center">
          {/* Center Navigation Only */}
          <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar