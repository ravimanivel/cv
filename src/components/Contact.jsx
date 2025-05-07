import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tooltip } from 'react-tooltip';
import Aos from 'aos';

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
            once: false
        });
        AOS.refresh()
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            //post the data to the database    
            const response = await fetch('https://cv-backend-udlu.onrender.com/api/sendEmail/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            // console.log('Form submitted:', formData);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
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
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2
                        className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Contact Me
                        </span>
                    </h2>
                    <p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Let's connect and discuss how I can help with your next project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div
                        className="bg-white dark:bg-gray-700/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <h3
                            className="text-2xl font-bold mb-8 text-gray-800 dark:text-white"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                                    >
                                        ravimanivel999@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-up"
                                data-aos-delay="450"
                            >
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h4>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                                    >
                                        +91 6380365924
                                    </a>
                                </div>
                            </div>

                            <div
                                className="flex items-start gap-4"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Salem, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        {/* Social Links with Tooltips */}
                        <div className="mt-12" data-aos="fade-up" data-aos-delay="550">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/ravi-manivel-87887a254/", label: "LinkedIn", id: "linkedin-tooltip" },
                                    { icon: <FiGithub />, url: "https://github.com/ravimanivel/", label: "GitHub", id: "github-tooltip" } 
                                ].map((social, index) => (
                                    <>
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                                            data-tooltip-id={social.id}
                                            data-tooltip-content={social.label}
                                            data-aos="zoom-in"
                                            data-aos-delay={600 + (index * 100)}
                                        >
                                            {social.icon}
                                        </a>
                                        <Tooltip
                                            id={social.id}
                                            place="top"
                                            effect="solid"
                                            className="z-50"
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="bg-white dark:bg-gray-700/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <h3
                            className="text-2xl font-bold mb-8 text-gray-800 dark:text-white"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {submitStatus === 'success' && (
                                <div
                                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-100 rounded-lg border border-green-200 dark:border-green-800"
                                    data-aos="fade-up"
                                >
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div
                                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-100 rounded-lg border border-red-200 dark:border-red-800"
                                    data-aos="fade-up"
                                >
                                    There was an error sending your message. Please try again.
                                </div>
                            )}

                            <div className="space-y-6">
                                <div data-aos="fade-up" data-aos-delay="400">
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border outline-none shadow-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 transition"
                                        placeholder="Ravi....."
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="450">
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border outline-none shadow-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 transition"
                                        placeholder="ravimanivel999@gmail.com"
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="500">
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 outline-none shadow-none border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 transition"
                                        placeholder="Hello, I would like to discuss..."
                                    ></textarea>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="550">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-6 py-3 cursor-pointer rounded-lg font-medium transition-all duration-300 ${isSubmitting
                                            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
