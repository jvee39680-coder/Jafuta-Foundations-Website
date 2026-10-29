import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePages from './Components/HomePages'
import Footer from './Components/Footer'
import VisionPages from './Components/VisionPages'
import AboutPages from './Components/AboutPages'
import TeamPages from './Components/TeamPages'
import Donate from './Components/Donate'
import BlogPages from './Components/BlogPages'


function AppContent() {
  const isDonatePage = useLocation().pathname === '/Donate'

  return (
    <>
      <div className="relative">
        <nav
          className={`absolute inset-x-0 top-0 z-10 flex items-center gap-2 p-3 sm:gap-4 sm:p-4 lg:gap-6 ${
            isDonatePage ? 'text-[#514944]' : 'text-blue-200'
          }`}
        >

          <Link className="block h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-40 lg:w-40" to="/">

            <img
              src={`${import.meta.env.BASE_URL}Donate%20%E2%80%94%20Jafuta%20Foundation_files/Jafuta+Logo+Home+page+(1).png`}
              alt="Jafuta logo"
              className="h-full w-full object-contain"
            />
            
          </Link>

          <div className="ml-auto flex items-center gap-1 text-xs sm:gap-2 sm:text-sm lg:gap-3 lg:text-base">

            <Link className="" to="/">Home</Link>
            <Link className="p-1 sm:p-2 lg:p-3" to="/Vision">Our Vision</Link>
            <Link className="p-1 sm:p-2 lg:p-3" to="/Projects">Projects</Link>
            <Link className="p-1 sm:p-2 lg:p-3" to="/About">About Us</Link>
            <Link className="p-1 sm:p-2 lg:p-3" to="/Team">Our Team</Link>
            <Link className="p-1 sm:p-2 lg:p-3" to="/Blog">Blog</Link>

            <span className={`flex h-10 w-6 items-center justify-center ${isDonatePage ? 'text-[#292522]' : 'text-[#fffefe]'}`} role="img" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
              </svg>
            </span>
            <span className={`flex h-10 w-6 items-center justify-center ${isDonatePage ? 'text-[#292522]' : 'text-[#ffffff]'}`} role="img" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.3" cy="6.9" r=".8" className="fill-current stroke-none" />
              </svg>
            </span>

            <Link className="whitespace-nowrap bg-[#398b91] px-3 py-2 text-white sm:px-4 sm:py-3 lg:px-7 lg:py-4" to="/Donate">
              Donate
            </Link>

          </div>

        </nav>

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/Vision" element={<VisionPages/>} />
          <Route path="/Projects" element={<div className="p-6">Projects</div>} />
          <Route path="/About" element={<AboutPages />} />
          <Route path="/Team" element={<TeamPages />} />
          <Route path="/Blog" element={<BlogPages />} />
          <Route path="/Donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
