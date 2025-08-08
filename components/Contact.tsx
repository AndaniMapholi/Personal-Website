import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PaperAirplaneIcon } from './icons/Icons';
import { GoogleGenAI } from '@google/genai';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      const prompt = `You are a friendly and professional assistant for Andani Mapholi, an IT Graduate specializing in Network Management. A person named "${name}" (email: ${email}) has sent the following message about a potential job opportunity or inquiry: "${message}". Please write a short, warm, and encouraging confirmation message addressed to ${name}. Acknowledge their message and assure them that Andani has received it and will respond as soon as possible. Do not repeat their email or message in your response. Keep it concise, positive, and professional.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      
      setStatus('success');
      setResponseMessage(response.text);
      e.currentTarget.reset();

    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
      setResponseMessage('Sorry, something went wrong while sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="max-w-2xl mx-auto bg-surface/60 backdrop-blur-md border border-slate-100/10 p-8 rounded-2xl shadow-lg animate-fade-in-up" style={{opacity: 0}}>
        <p className="text-center text-text-secondary mb-8">
          I'm open to new opportunities and collaborations. Feel free to reach out using the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-background/70 border border-slate-100/10 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition text-sm"
              placeholder="Your Name"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-background/70 border border-slate-100/10 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition text-sm"
              placeholder="you@example.com"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full bg-background/70 border border-slate-100/10 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition text-sm"
              placeholder="Your message..."
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-px disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
        {status === 'success' && <p className="text-center text-green-400 mt-4 animate-fade-in">{responseMessage}</p>}
        {status === 'error' && <p className="text-center text-red-400 mt-4 animate-fade-in">{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;