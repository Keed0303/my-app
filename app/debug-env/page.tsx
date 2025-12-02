'use client';

export default function DebugEnv() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Environment Variables Debug</h1>
      <div className="space-y-4 font-mono">
        <div className="border border-gray-700 p-4 rounded">
          <p className="text-gray-400">NEXT_PUBLIC_EMAILJS_SERVICE_ID:</p>
          <p className="text-green-400">
            {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '❌ NOT SET'}
          </p>
        </div>

        <div className="border border-gray-700 p-4 rounded">
          <p className="text-gray-400">NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:</p>
          <p className="text-green-400">
            {process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '❌ NOT SET'}
          </p>
        </div>

        <div className="border border-gray-700 p-4 rounded">
          <p className="text-gray-400">NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:</p>
          <p className="text-green-400">
            {process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '❌ NOT SET'}
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500 rounded">
        <p className="text-yellow-400">
          ⚠️ If any variable shows "NOT SET", your environment variables are not properly configured in Vercel.
        </p>
      </div>
    </div>
  );
}
