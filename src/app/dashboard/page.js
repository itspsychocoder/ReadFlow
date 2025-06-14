import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <span className="text-xl font-bold text-white">ReadFlow</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-emerald-400 font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Library</a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Goals</a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Stats</a>
              </nav>
              
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  Log Reading
                </button>
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John! 👋</h1>
          <p className="text-gray-400">Ready to continue your reading journey today?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 p-6 rounded-xl border border-emerald-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-sm font-medium">Books Read</p>
                <p className="text-3xl font-bold text-white">24</p>
                <p className="text-gray-400 text-sm">This year</p>
              </div>
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 p-6 rounded-xl border border-orange-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-400 text-sm font-medium">Pages Read</p>
                <p className="text-3xl font-bold text-white">8,432</p>
                <p className="text-gray-400 text-sm">Total pages</p>
              </div>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📖</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/50 to-teal-800/50 p-6 rounded-xl border border-teal-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-400 text-sm font-medium">Reading Streak</p>
                <p className="text-3xl font-bold text-white">15</p>
                <p className="text-gray-400 text-sm">Days in a row</p>
              </div>
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔥</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-900/50 to-amber-800/50 p-6 rounded-xl border border-amber-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-400 text-sm font-medium">Reading Time</p>
                <p className="text-3xl font-bold text-white">142h</p>
                <p className="text-gray-400 text-sm">This year</p>
              </div>
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⏱️</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Currently Reading */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Currently Reading</h2>
                <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📖</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">The Psychology of Money</h3>
                    <p className="text-gray-400 text-sm">by Morgan Housel</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>156/312 pages (50%)</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Log Progress
                  </button>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Atomic Habits</h3>
                    <p className="text-gray-400 text-sm">by James Clear</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>89/320 pages (28%)</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Log Progress
                  </button>
                </div>
              </div>
            </div>

            {/* Reading Activity Chart */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Reading Activity</h2>
                <div className="flex space-x-2">
                  <button className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">7 Days</button>
                  <button className="text-gray-400 hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">30 Days</button>
                  <button className="text-gray-400 hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">Year</button>
                </div>
              </div>
              
              {/* Simple Chart Representation */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Mon</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">45 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Tue</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">32 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Wed</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">52 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Thu</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">38 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Fri</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">65 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Sat</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">22 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Sun</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <span className="text-white text-sm">48 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Reading Goals */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Reading Goals</h2>
                <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  Edit
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Books This Year</span>
                    <span className="text-white text-sm font-medium">24/30</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">6 books to go!</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Daily Reading</span>
                    <span className="text-white text-sm font-medium">45/60 min</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">15 minutes left today</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Pages This Month</span>
                    <span className="text-white text-sm font-medium">1,240/1,500</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full" style={{width: '83%'}}></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">260 pages to go</p>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Achievements</h2>
                <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-900/30 to-emerald-800/30 rounded-lg border border-emerald-700/20">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Speed Reader</p>
                    <p className="text-gray-400 text-xs">Read 100 pages in one day</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-900/30 to-orange-800/30 rounded-lg border border-orange-700/20">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🔥</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Streak Master</p>
                    <p className="text-gray-400 text-xs">15-day reading streak</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-900/30 to-teal-800/30 rounded-lg border border-teal-700/20">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📚</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Bookworm</p>
                    <p className="text-gray-400 text-xs">Completed 20 books</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                  Log Reading Session
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Add New Book
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Set New Goal
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  View Statistics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
