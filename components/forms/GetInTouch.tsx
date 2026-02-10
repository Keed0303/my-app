import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-gray-300 mb-2 transition-colors duration-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-slate-400 dark:focus:border-white/30 focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-gray-300 mb-2 transition-colors duration-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-slate-400 dark:focus:border-white/30 focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-gray-300 mb-2 transition-colors duration-300">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-slate-400 dark:focus:border-white/30 focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 resize-none transition-all duration-300"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

export default GetInTouch
