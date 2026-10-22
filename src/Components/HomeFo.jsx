
import { useState } from 'react'

const testimonials = [
  {
    name: 'Edward Mazunga',
    message:
      'Your commitment to my education and studies has well and truly transformed my life. I am able to pursue my studies and focus on my future as a lawyer without the burden of financial worries and I am immensely grateful for the opportunities you have created.'
  },
  {
    name: 'Muzi',
    message:
      'Through access to the internet and Career Guidance program I was introduced to electrics. I knew what I wanted to be then and I am now reaching my dreams thanks to the mentorship and support through Jafuta Foundation.'
  },
  {
    name: 'Mildred M',
    message:
      'From the village to becoming a qualified Software Engineer—something I never imagined before Jafuta Foundation.'
  },
  {
    name: 'Teen, Ndimakule',
    message: ' I never thought I would use a computer until I joined the Education and Technology Centre.'
  },
  {
    name: 'Community Member',
    message: 'My daughter and I no longer walk long distances for water thatnks to the solar-powered well nearby.'
  },

   {
    name: 'Solani N',
    message: 'Through my work at Batoka Creatives, I can now feed my family and pay school fees.'
  },

   {
    name: 'Student B',
    message: 'Thanks to the bicycle I recieved, I can attend schol everyday and study longer.'
  }

]

const HomeFo = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStart, setDragStart] = useState(null)

  const nextTestimonials = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % testimonials.length
    )
  }

  const previousTestimonials = () => {
    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const handlePointerDown = (event) => {
    setDragStart(event.clientX)
  }

  const handlePointerUp = (event) => {
    if (dragStart === null) return

    const distance = event.clientX - dragStart

    if (distance < -50) {
      nextTestimonials()
    } else if (distance > 50) {
      previousTestimonials()
    }

    setDragStart(null)
  }

  const handlePointerCancel = () => {
    setDragStart(null)
  }

  return (
    <section className="bg-white px-4 py-10 md:px-10">
      <div className="relative px-8 md:px-12">

      
        <button
          type="button"
          onClick={previousTestimonials}
          aria-label="Previous testimonials"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#70A9AA] text-2xl text-white transition hover:bg-[#569BAA] md:h-14 md:w-14"
        >
          ←
        </button>

        
        <div
          className="overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={handlePointerCancel}
        >
       
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            

            {[0, 1, 2].map((offset) => {
              const person =
                testimonials[
                  (currentIndex + offset) % testimonials.length
                ]

              return (
                <article
                  key={person.name}
                  className="min-h-[280px] select-none bg-[#EDE4D9] p-6 md:p-8"
                >
                  <h3 className="mb-3 text-2xl font-medium text-[#292522]">
                    {person.name}
                  </h3>

                  <p className="text-base italic leading-relaxed text-[#292522]">
                    "{person.message}"
                  </p>
                </article>
              )
            })}

          </div>
        </div>

  
        <button
          type="button"
          onClick={nextTestimonials}
          aria-label="Next testimonials"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#70A9AA] text-2xl text-white transition hover:bg-[#569BAA] md:h-14 md:w-14"
        >
          →
        </button>

      </div>
    </section>
  )
}

export default HomeFo
