import { useState, useEffect } from 'react';

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');
    const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            const homeElement = document.getElementById('home');

            // Detect home section
            if (homeElement && scrollPosition < homeElement.offsetHeight) {
                setActiveSection('home');
                return;
            }

            // Detect other sections
            for (const section of navItems) {
                if (section === 'home') continue;
                
                const element = document.getElementById(section);
                if (!element) continue;
                
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    
                    {/* Logo/Name */}
                    <a 
                        href="#" 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Ravi M
                    </a>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((section) => (
                            <div key={section} className="relative group">
                                <a
                                    href={`#${section === 'home' ? '' : section}`}
                                    className={`
                                        px-4 py-2 rounded-lg transition-all
                                        ${activeSection === section 
                                            ? 'text-blue-600 dark:text-blue-400 font-medium' 
                                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                        }
                                    `}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                                
                                {/* Active indicator */}
                                <div className={`
                                    absolute bottom-0 left-1/2 transform -translate-x-1/2
                                    h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full
                                    transition-all duration-300
                                    ${activeSection === section ? 'w-3/4' : 'w-0 group-hover:w-1/2'}
                                `}></div>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile menu button would go here */}
                </div>
            </div>
        </header>
    )
}