import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master Your Reading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Flow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A modern, user-friendly platform to log daily reading progress, track books, 
              visualize your stats, set goals, and stay motivated on your reading adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Start Reading Journey
              </button>
              <button className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Hero Image/Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-gray-800 rounded-2xl shadow-2xl shadow-black/50 p-8 max-w-4xl mx-auto border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 p-6 rounded-xl border border-emerald-700/30">
                  <h3 className="font-semibold text-gray-200 mb-2">Books Read</h3>
                  <div className="text-3xl font-bold text-emerald-400">24</div>
                  <div className="text-sm text-gray-400">This year</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 p-6 rounded-xl border border-orange-700/30">
                  <h3 className="font-semibold text-gray-200 mb-2">Pages Read</h3>
                  <div className="text-3xl font-bold text-orange-400">8,432</div>
                  <div className="text-sm text-gray-400">Total pages</div>
                </div>
                <div className="bg-gradient-to-br from-teal-900/50 to-teal-800/50 p-6 rounded-xl border border-teal-700/30">
                  <h3 className="font-semibold text-gray-200 mb-2">Reading Streak</h3>
                  <div className="text-3xl font-bold text-teal-400">15</div>
                  <div className="text-sm text-gray-400">Days in a row</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Track Your Reading
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to make reading tracking effortless and motivating
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-700/20">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Daily Progress Logging</h3>
              <p className="text-gray-300">
                Easily log your daily reading sessions with pages read, time spent, and personal notes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 border border-orange-700/20">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Book Library</h3>
              <p className="text-gray-300">
                Organize your reading list with currently reading, want to read, and completed books.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 border border-teal-700/20">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visual Statistics</h3>
              <p className="text-gray-300">
                Beautiful charts and graphs to visualize your reading patterns and progress over time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Goal Setting</h3>
              <p className="text-gray-300">
                Set and track reading goals - books per year, pages per day, or reading time targets.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 border border-red-700/20">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Achievements</h3>
              <p className="text-gray-300">
                Unlock badges and achievements to stay motivated and celebrate your reading milestones.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-cyan-700/20">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Friendly</h3>
              <p className="text-gray-300">
                Access your reading data anywhere with our responsive design and mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Thousands of Happy Readers
            </h2>
            <p className="text-xl opacity-90 text-emerald-100">
              See what our community has achieved together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">50K+</div>
              <div className="text-lg opacity-90 text-emerald-100">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">2M+</div>
              <div className="text-lg opacity-90 text-emerald-100">Books Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">500M+</div>
              <div className="text-lg opacity-90 text-emerald-100">Pages Read</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">98%</div>
              <div className="text-lg opacity-90 text-emerald-100">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Reading Habits?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of readers who have already started their journey with ReadFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
              Learn More
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      
    </div>
  );
}
