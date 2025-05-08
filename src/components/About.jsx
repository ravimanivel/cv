import React, { useEffect, useState } from 'react';
import { FiUser, FiBook, FiAward, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const tabs = [
        { id: 'personal', label: 'Personal', icon: <FiUser /> },
        { id: 'education', label: 'Education', icon: <FiBook /> },
        { id: 'certificate', label: 'Certificates', icon: <FiAward /> }
    ];

    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        Aos.refresh();
    }, [activeTab]);

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/90 dark:to-gray-900/90"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            About Me
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-5xl leading-relaxed">
                    I am a dedicated Full Stack Developer with experience in PHP, MySQL, Laravel, Angular, MongoDB, Express, JavaScript, and Bootstrap. 
                    With a strong foundation in web development, database management, and UI/UX design, 
                    I strive to build efficient and scalable solutions.
                    </p>
                </div>

                <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    {/* Tab Buttons */}
                    <div className="flex border-b border-gray-200 dark:border-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 flex items-center justify-center gap-3 px-6 py-5 font-medium text-sm sm:text-base transition-all duration-300 
                                    ${activeTab === tab.id
                                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-300 hover:bg-white/50 dark:hover:bg-gray-600/50'
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay={tab.id === 'personal' ? 100 : tab.id === 'education' ? 200 : 300}
                            >
                                <span className="text-xl">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 sm:p-10">
                        {/* Personal Information */}
                        {activeTab === 'personal' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                                {[
                                    { icon: <FiUser />, title: "Name", content: "Ravi M" },
                                    { icon: <FiMail />, title: "Email", content: "ravimanivel999@gmail.com" },
                                    { icon: <FiMapPin />, title: "Address", content: "Salem, Tamil Nadu" },
                                    { icon: <FiPhone />, title: "Phone", content: "+91 6380365924" }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 p-6 bg-gray-50/50 dark:bg-gray-600/30 rounded-xl hover:shadow-md transition-all duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={100 * (index + 1)}
                                    >
                                        <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Education */}
                        {activeTab === 'education' && (
                            <div className="space-y-8" data-aos="fade-up">
                                <div className="p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-600/50 dark:to-gray-700/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-inner">
                                            <FiBook className="text-3xl text-blue-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                                Bachelor of Science in Computer Science 
                                            </h3>
                                            <p className="text-lg text-blue-600 dark:text-purple-400 font-medium mb-2">
                                                Bishop Heber College
                                            </p>
                                            <div className="flex flex-wrap gap-4 mt-4">
                                                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    2021 - 2024
                                                </span>
{/*                                                 <span className="px-4 py-2 bg-blue-100 dark:bg-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-purple-300">
                                                    CGPA: 6.62/10.00
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Certificates */}
                        {activeTab === 'certificate' && (
                            <div className="text-center py-12" data-aos="zoom-in">
                                <div className="inline-flex p-5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-6">
                                    <FiAward className="text-4xl text-blue-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                    Professional Certifications
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                                    My certifications in web development and related technologies
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: 'React State and Events',
                                            provider: 'Microsoft',
                                            year: 'Apr 2025'
                                        },
                                        {
                                            title: 'Working with Data and Properties in React Components',
                                            provider: 'Microsoft',
                                            year: 'Apr 2025'
                                        },
                                        {
                                            title: 'AWS Ai Conclave',
                                            provider: 'Amazon Web Services (AWS)',
                                            year: 'Jan 2025'
                                        },
                                        {
                                            title: 'Build a free website with WordPress',
                                            provider: 'Cousera Project Network',
                                            year: 'Sep 2024'
                                        },
                                        {
                                            title: 'Web Development Fundamentals',
                                            provider: 'IBM Skill Build',
                                            year: 'Sep 2024'
                                        },
                                        {
                                            title: 'Explore fundamentals of Data Visualization',
                                            provider: 'Microsoft',
                                            year: 'Apr 2024'
                                        },
                                        {
                                            title: 'Python Essentials I course at Cisco Networking Academy Python Essentials I course at Cisco Networking Academy',
                                            provider: 'Cisco Networking Academy',
                                            year: 'Mar 2024'
                                        } 
                                        
                                    ].map((cert, index) => (
                                        <div
                                            key={index}
                                            className="p-6 bg-white/80 dark:bg-gray-700/80 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="text-blue-600 dark:text-purple-400 mb-4">
                                                <FiAward className="text-3xl inline-block" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                                {cert.title}
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400 mb-3">
                                                {cert.provider}
                                            </p>
                                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 rounded-full text-sm">
                                                {cert.year}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
