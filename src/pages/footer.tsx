import React from 'react'

const footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 py-6 flex flex-col items-center justify-center">
      <p className="text-sm">&copy; 2025 FreelanceStudio. All rights reserved.</p>
      <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-gray-500 transition">Twitter</a>
        <a href="#" className="hover:text-gray-500 transition">LinkedIn</a>
        <a href="#" className="hover:text-gray-500 transition">GitHub</a>
      </div>
    </footer>
  )
}

export default footer
