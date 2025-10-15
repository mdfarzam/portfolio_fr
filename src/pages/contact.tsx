"use client"
import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@freelancestudio.com",
      link: "mailto:hello@freelancestudio.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "🌍",
      label: "Location",
      value: "Remote • Worldwide",
      link: null
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Dribbble", icon: "🎨", url: "#" }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Message submitted:', formData);
    // Here you can add API call to send the message
  };

  return (
    <div className='bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-16'>
      <div className="mx-1 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center px-12 py-12 relative overflow-hidden shadow-2xl">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto justify-between gap-12 relative z-10">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:w-2/5 shadow-2xl border border-gray-100">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
              📬 Get in Touch
            </div>

            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Do you have a project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                in mind?
              </span>
            </h2>

            <p className="text-gray-600 mb-6 text-sm">
              We'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-700 mb-1.5">Your Name*</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-700 mb-1.5">Email*</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-700 mb-1.5">Message*</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-3 rounded-full mt-2 hover:shadow-xl transition-all hover:scale-105"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right Side - Info Section */}
          <div className="flex flex-col justify-center text-white lg:w-2/5 space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-3 flex flex-wrap gap-3 items-center">
                Let's 
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
                  Connect
                </span>
              </h1>
              <p className="text-base text-gray-300 leading-relaxed">
                Tell us your vision — from web applications and SaaS platforms to mobile apps and growth strategies.
              </p>
            </div>

            {/* Divider */}
            <div className="bg-gradient-to-r from-transparent via-white/50 to-transparent h-px"></div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                      {item.link ? (
                        <a href={item.link} className="text-white text-sm font-semibold hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
                    title={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 font-semibold text-xs">We're Online</span>
              </div>
              <p className="text-white text-xs">
                Average response time: <span className="font-bold">2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
