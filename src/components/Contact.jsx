import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tooltip } from 'react-tooltip';
import { playSciFiSound } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    playSciFiSound('click');

    try {
      const response = await fetch('https://cv-backend-udlu.onrender.com/api/sendEmail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      playSciFiSound('open');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Initialize Contact
            </span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Direct dispatch line for project inquiries, technical collaborations, and software developer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            className="bg-gray-900/80 border border-gray-800 hover:border-cyan-500/40 rounded-2xl p-8 shadow-xl backdrop-blur-md flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-white font-mono flex items-center space-x-2">
                <span className="text-cyan-400">&gt;</span>
                <span>CONTACT_NODES</span>
              </h3>

              <div className="space-y-6 font-mono">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 tracking-wider">EMAIL DISPATCH</h4>
                    <a
                      href="mailto:ravimanivel999@gmail.com"
                      onClick={() => playSciFiSound('hover')}
                      className="text-cyan-300 hover:text-white font-semibold transition-colors text-sm sm:text-base"
                    >
                      ravimanivel999@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 tracking-wider">PHONE DIRECT</h4>
                    <a
                      href="tel:+916380365924"
                      onClick={() => playSciFiSound('hover')}
                      className="text-cyan-300 hover:text-white font-semibold transition-colors text-sm sm:text-base"
                    >
                      +91 6380365924
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 tracking-wider">BASE LOCATION</h4>
                    <p className="text-gray-200 font-semibold text-sm sm:text-base">
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                EXTERNAL CONNECT CHANNELS
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/ravi-manivel-87887a254/", label: "LinkedIn", id: "linkedin-tooltip" },
                  { icon: <FiGithub />, url: "https://github.com/ravimanivel/", label: "GitHub", id: "github-tooltip" }
                ].map((social, index) => (
                  <div key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playSciFiSound('click')}
                      className="p-3.5 rounded-xl bg-gray-950 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 inline-block"
                      data-tooltip-id={social.id}
                      data-tooltip-content={social.label}
                    >
                      {social.icon}
                    </a>
                    <Tooltip id={social.id} place="top" effect="solid" className="z-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gray-900/80 border border-gray-800 hover:border-cyan-500/40 rounded-2xl p-8 shadow-xl backdrop-blur-md"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold mb-6 text-white font-mono flex items-center space-x-2">
              <span className="text-cyan-400">&gt;</span>
              <span>DISPATCH_MESSAGE</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-xl text-xs font-mono">
                  ✓ MESSAGE DISPATCHED SUCCESSFULLY! RAVI WILL RESPOND PROMPTLY.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-rose-950/80 border border-rose-500/50 text-rose-300 rounded-xl text-xs font-mono">
                  ✕ DISPATCH FAILED. PLEASE VERIFY NETWORK AND RETRY.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-mono text-cyan-400 mb-1.5 uppercase">
                  SENDER NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:border-cyan-400 outline-none text-gray-100 placeholder-gray-600 font-sans transition-all text-sm"
                  placeholder="e.g. Alex Vance"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-cyan-400 mb-1.5 uppercase">
                  SENDER EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:border-cyan-400 outline-none text-gray-100 placeholder-gray-600 font-sans transition-all text-sm"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-cyan-400 mb-1.5 uppercase">
                  MESSAGE BODY
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:border-cyan-400 outline-none text-gray-100 placeholder-gray-600 font-sans transition-all text-sm"
                  placeholder="Describe project details or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]'
                }`}
              >
                {isSubmitting ? 'DISPATCHING...' : 'SEND TRANSMISSION'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
