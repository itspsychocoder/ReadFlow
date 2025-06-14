import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
     <header className="w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
     <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center h-16">
         <div className="flex items-center space-x-2">
           <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-sm">📚</span>
           </div>
           <span className="text-xl font-bold text-white">ReadFlow</span>
         </div>
         
         <div className="hidden md:flex items-center space-x-8">
           <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
           <a href="#stats" className="text-gray-300 hover:text-emerald-400 transition-colors">Stats</a>
           <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors">Pricing</a>
           <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a>
         </div>
         
         <div className="flex items-center space-x-4">
           <Link href="/login" className="text-gray-300 hover:text-emerald-400 transition-colors">Sign In</Link>
           <Link href="/signup" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
             Get Started
           </Link>
         </div>
       </div>
     </nav>
   </header>
  )
}

export default Navbar
