import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-teal-700 dark:text-blue-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-blue-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-teal-700 dark:text-blue-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-blue-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-teal-700 dark:text-blue-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-blue-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 resize-none transition-all duration-300"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

export default GetInTouch