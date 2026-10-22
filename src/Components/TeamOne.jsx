import courtneyConnelly from '../Images-team/Courtney+Connelly.webp'
import gailJaarsveldt from '../Images-team/Gail+Image+1.webp'
import minenhleMoyo from '../Images-team/Minenhle+Moyo.webp'
import nyashaMupita from '../Images-team/Nyasha+Mupita.webp'
import siphoMoyo from '../Images-team/Sipho+Moyo.webp'
import tsitsiMposiwa from '../Images-team/Tsitsi+Mposiwa.webp'

const teamMembers = [
  { name: 'Gail van Jaarsveldt', image: gailJaarsveldt },
  { name: 'Minenhle Moyo', image: minenhleMoyo },
  { name: 'Sipho Moyo', image: siphoMoyo },
  { name: 'Courtney Connelly', image: courtneyConnelly },
  { name: 'Nyasha Mupita', image: nyashaMupita },
  { name: 'Tsitsi Mposiwa', image: tsitsiMposiwa },
]

const TeamOne = () => {
  return (
    <section className="w-full bg-white px-6 pb-20 pt-44 text-[#171717] sm:px-10">
      <div className="mx-auto max-w-[1040px]">
        <blockquote className="mx-auto mb-24 max-w-xl text-center text-sm leading-relaxed">
          <p>
            “If you want to go fast, go alone. If you want to go far, go together.”
          </p>
          <cite className="mt-1 block not-italic">— African Proverb</cite>
        </blockquote>

        <h1 className="mb-7 text-center text-3xl font-normal tracking-tight">
          Meet the Team
        </h1>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map(({ name, image }) => (
            <article key={name} className="min-w-0">
              <img
                src={image}
                alt={name}
                className="aspect-[3/4] w-full object-cover"
              />
              <h2 className="mt-3 text-sm font-medium">{name}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamOne