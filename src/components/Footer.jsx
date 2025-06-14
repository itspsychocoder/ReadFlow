import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">📚</span>
            </div>
            <span className="text-xl font-bold">ReadFlow</span>
          </div>
          <p className="text-gray-400">
            Your personal reading companion for tracking progress and staying motivated.
          </p>
        </div>

      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ReadFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
