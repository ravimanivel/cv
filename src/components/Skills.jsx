import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        Aos.refresh()
    }, []);

    const skills = [
        { name: 'Laravel', icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
        { name: 'PHP', icon: "https://cdn.worldvectorlogo.com/logos/php-4.svg" },
        { name: 'React', icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: 'Angular', icon: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg" },
        { name: 'Node.js', icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: 'Express.js', icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
        { name: 'MongoDB', icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: 'MySQL', icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" },
        { name: 'Python', icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" }, 
        { name: 'JavaScript', icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" }, 
        { name: 'HTML5', icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: 'CSS', icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: 'Bootstrap', icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" },
        { name: 'Git', icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
        { name: 'GitHub', icon: "https://cdn.worldvectorlogo.com/logos/github-icon.svg" },
        {name : 'Docker', icon: "https://cdn.worldvectorlogo.com/logos/docker-4.svg"},
        {name : 'Linux', icon: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg"},
    ];

    return (
        <section
            id="skills"
            className="py-20 bg-white dark:bg-gray-900"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center" data-aos="fade-down">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            My Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Technologies I've mastered through projects and experience
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
