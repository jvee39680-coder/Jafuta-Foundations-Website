import benoitFaydherbe from "../Images-team/Benoit+Fayd'herbe.webp"
import malcolmAinscough from '../Images-team/Malcolm+Ainscough.webp'
import joshuaMagaba from '../Images-team/Joshua+Magaba.webp'
import gailJaarsveldt from '../Images-team/Gail+Image+1.webp'
import nyashaMupita from '../Images-team/Nyasha+Mupita.webp'
import courtneyConnelly from '../Images-team/Courtney+Connelly.webp'
import saraGardiner from '../Images-team/Sara+Gardiner.webp'

const trustees = [
  { name: "Benoit Fayd'herbe", image: benoitFaydherbe },
  { name: 'Malcolm Ainscough', image: malcolmAinscough },
  { name: 'Kathy Cole (USA)' },
  { name: 'Joshua Magaba', image: joshuaMagaba },
  { name: 'Gail van Jaarsveldt', image: gailJaarsveldt },
  { name: 'Nyasha Mupita', image: nyashaMupita },
  { name: 'Courtney Connelly', image: courtneyConnelly },
  { name: 'Sara Gardiner', image: saraGardiner },
]

const TeamTwo = () => {
  return (
    <section className="w-full bg-[#eee5da] px-6 py-16 text-[#292521] sm:px-10 md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="mb-14 text-center text-3xl font-normal sm:text-4xl">
          Board of Trustees
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-14">
          {trustees.map(({ name, image }) => (
            <article key={name} className="flex min-w-0 flex-col items-center text-center">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="aspect-square w-full max-w-[265px] rounded-full object-cover"
                />
              ) : (
                <div className="flex aspect-square w-full max-w-[265px] items-start justify-center pt-1 text-lg sm:text-xl">
                  {name}
                </div>
              )}
              {image && <h3 className="mt-5 text-lg sm:text-xl">{name}</h3>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamTwo