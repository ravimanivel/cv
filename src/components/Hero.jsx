import resume from '../assets/M_RAVI_Web_Developer .pdf'
import me from '../assets/ravi.png'
export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-[90vh] flex items-center py-12"
            data-aos="fade-in"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content - Left Side */}
                    <div className="max-w-2xl order-2 md:order-1">
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ravi M</span>
                        </h1>
                        <h2
                            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Web Developer / Laravel Developer
                        </h2>
                        <p
                            className="text-lg mb-8 text-gray-600 dark:text-gray-300"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            A passionate developer specializing in modern web technologies.
                            I build dynamic web applications with clean, efficient code.
                        </p>
                        <div
                            className="flex flex-wrap gap-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-blue-500/20"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                Contact Me
                            </a>
                            <a
                                href={resume}
                                download
                                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all"
                                data-aos="zoom-in"
                                data-aos-delay="550"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Photo - Right Side */}
                    <div 
                        className="order-1 md:order-2 w-full md:w-auto"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/10 shadow-xl">
                            {/* Replace with your actual photo */}
                            
                            <img 
                              src={me}
                                alt="Your Name"
                                className="w-full h-full object-cover"
                            /> 
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}