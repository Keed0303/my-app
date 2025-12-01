import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500 resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

export default GetInTouch