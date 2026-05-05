'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-2">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-150"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-2">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-150"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors duration-150"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-text-primary text-bg-primary font-medium text-sm transition-colors duration-150 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully.</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">Failed to send. Please try again.</p>
      )}
    </form>
  );
};

export default GetInTouch;
