"use client";
import { useState } from "react";
import Link from "next/link";

export default function AddBook() {
  const [selectedEmoji, setSelectedEmoji] = useState("📚");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    totalPages: "",
    genre: "",
    isbn: "",
    publishedYear: "",
    language: "English",
    status: "want-to-read",
    priority: "medium",
    tags: "",
    notes: ""
  });

  const bookEmojis = [
    "📚", "📖", "📕", "📗", "📘", "📙", "📓", "📔", "📒", "📑",
    "🔖", "📰", "🗞️", "📜", "📋", "📄", "📃", "🧾", "📊", "📈",
    "📉", "🗂️", "📂", "📁", "🗃️", "🗄️", "📇", "🔍", "🔎", "💡",
    "🎓", "🏆", "⭐", "🌟", "✨", "🎯", "🚀", "💎", "🔥", "⚡"
  ];

  const genres = [
    "Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", "Fantasy",
    "Biography", "History", "Self-Help", "Business", "Psychology", "Philosophy",
    "Health", "Travel", "Cooking", "Art", "Poetry", "Drama", "Horror", "Thriller"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Book data:", { ...formData, cover: selectedEmoji });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📚</span>
                </div>
                <span className="text-xl font-bold text-white">ReadFlow</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Add New Book</h1>
          <p className="text-gray-400">Add a new book to your reading library</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover Selection */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-8">
                <h2 className="text-xl font-bold text-white mb-4">Book Cover</h2>
                
                {/* Selected Emoji Preview */}
                <div className="text-center mb-6">
                  <div className="w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-gray-600">
                    <span className="text-6xl">{selectedEmoji}</span>
                  </div>
                  <p className="text-gray-400 text-sm">Selected cover</p>
                </div>

                {/* Emoji Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Choose an emoji cover
                  </label>
                  <div className="grid grid-cols-6 gap-2 max-h-64 overflow-y-auto bg-gray-700/50 p-3 rounded-lg">
                    {bookEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedEmoji(emoji)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl transition-all duration-200 ${
                          selectedEmoji === emoji
                            ? 'bg-emerald-600 shadow-lg scale-110'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Book Details Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-6">Book Details</h2>
                
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                        Book Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter book title"
                      />
                    </div>

                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-2">
                        Author *
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        value={formData.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter author name"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Enter book description or summary..."
                    />
                  </div>

                  {/* Book Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="totalPages" className="block text-sm font-medium text-gray-300 mb-2">
                        Total Pages *
                      </label>
                      <input
                        type="number"
                        id="totalPages"
                        name="totalPages"
                        required
                        min="1"
                        value={formData.totalPages}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label htmlFor="genre" className="block text-sm font-medium text-gray-300 mb-2">
                        Genre
                      </label>
                      <select
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select genre</option>
                        {genres.map((genre) => (
                          <option key={genre} value={genre}>{genre}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="publishedYear" className="block text-sm font-medium text-gray-300 mb-2">
                        Published Year
                      </label>
                      <input
                        type="number"
                        id="publishedYear"
                        name="publishedYear"
                        min="1000"
                        max={new Date().getFullYear()}
                        value={formData.publishedYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="2024"
                      />
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="isbn" className="block text-sm font-medium text-gray-300 mb-2">
                        ISBN
                      </label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="978-0-123456-78-9"
                      />
                    </div>

                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-2">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Reading Status and Priority */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-2">
                        Reading Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="want-to-read">Want to Read</option>
                        <option value="currently-reading">Currently Reading</option>
                        <option value="completed">Completed</option>
                        <option value="paused">Paused</option>
                        <option value="abandoned">Abandoned</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
                        Priority
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter tags separated by commas (e.g., productivity, habits, self-improvement)"
                    />
                    <p className="text-gray-400 text-sm mt-1">Separate tags with commas</p>
                  </div>

                  {/* Personal Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                      Personal Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Add your personal notes about this book..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="/dashboard"
              className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-all duration-300 text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Add Book to Library
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
