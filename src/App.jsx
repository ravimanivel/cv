import './App.css'
import 'aos/dist/aos.css' // AOS styles
import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Easing type
        once: true, // Whether animation should happen only once
        mirror: false, // Whether elements should animate out while scrolling past them
        offset: 100, // Offset (in px) from the original trigger point
      })
    })
  }, [])

  return (
    <div className="relative">
      {/* Background elements (same as before) */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-blue-500/10 to-emerald-500/10 dark:from-purple-900/15 dark:via-blue-900/15 dark:to-emerald-900/15"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl dark:bg-pink-700/20"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-700/20"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-700/20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 dark:opacity-20"></div>
      </div>

      <div className="min-h-screen bg-white/80 dark:bg-gray-900/90 backdrop-blur-md text-gray-900 dark:text-gray-50 transition-all duration-500">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop /> 
      </div>
    </div>
  )
}

export default App