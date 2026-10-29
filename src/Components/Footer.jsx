import { Link } from 'react-router-dom'
import logo from '../Images-home/Jafuta-candid-logo.webp'

const Footer = () => {
  return (
    <footer className="bg-[rgb(102,86,80)] px-6 py-12 h-130 text-white sm:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <address className="not-italic font-bold text-lg">
          <h2 className="mb-4 ">Jafuta Foundation</h2>
          <p>Elephant&apos;s Walk</p>
          <p>273 Adam Stander Road</p>
          <p>Victoria Falls, Zimbabwe</p>
          <p className="mt-3">PVO Registration No: 201/26</p>

          
        <div className='mt-10'>
          <img src={logo} alt="Jafuta Foundation" />
        </div>

        </address>


        <address className="not-italic text-lg font-bold mt-15">
          <h2 className="mb-4 font-semibold">Jafuta Foundation</h2>
          <p>525 BingHam Knoll</p>
          <p>Jacksonville, OR 97530</p>
          <p>Registered 501(c)3</p>
          <p>Ein No. 81-3902811</p>
          <p className="mt-3">
            Email:{' '}
            <a className="underline hover:text-gray-300" href="mailto:gcvj@jafuta.org">
              gcvj@jafuta.org
            </a>
          </p>
        </address>

        <nav aria-label="About Jafuta Foundation">
          <h2 className="mb-4 font-semibold">About</h2>
          <ul className="space-y-2">
            <li><Link className="underline" to="/Vision">Our Vision</Link></li>
            <li><Link className="underline" to="/About">About Us</Link></li>
            <li><Link className="underline" to="/Team">Our Team</Link></li>
            <li><Link className="underline" to="/Blog">Blog</Link></li>
          </ul>
        </nav>

        <nav aria-label="Jafuta Foundation projects">
          <h2 className="mb-4 font-semibold">Projects</h2>
          <ul className="space-y-2">
            <li><Link className="hover:underline" to="/Projects">Our Projects</Link></li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}

export default Footer
