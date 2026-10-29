import { useState } from 'react'
import newsletterBackground from '../Images-home/handcraft.png'

const BlogTwo = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage("Newsletter sign-up isn't connected yet.")
  }

  return (
    <section
      className="flex min-h-[420px] items-center justify-center bg-cover bg-center px-5 py-12 sm:px-8"
      style={{ backgroundImage: `url(${newsletterBackground})` }}
    >
      <div className="w-full max-w-[550px] bg-[#eee5dc] px-6 py-6 text-center sm:px-10 sm:py-5">
        <h2 className="text-3xl font-normal text-[#302b28]">Subscribe</h2>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-[#514944]">
          Sign up to our quarterly newsletter to receive news and updates.
        </p>

        <form
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email Address
          </label>
          <input
            className="min-w-0 flex-1 border border-[#ddd5ce] bg-white px-5 py-4 text-[#302b28] placeholder:text-[#b8b3b0] focus:outline-2 focus:outline-[#398b91]"
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <button
            className="bg-[#302b28] px-8 py-4 font-medium text-white hover:bg-[#514944] focus:outline-2 focus:outline-offset-2 focus:outline-[#398b91]"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p aria-live="polite" className="mt-10 text-sm text-[#817b75]">
          {message || 'We respect your privacy.'}
        </p>
      </div>
    </section>
  )
}

export default BlogTwo