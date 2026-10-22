import manAtWork from '../Images-about/man-worker-africa.webp'
import studentsLearning from '../Images-home/Classroom.png'
import africasEden from '../Images-about/Africa\'s+Eden.webp'
import childrenCommunity from '../Images-about/Children+Community (1).webp'
import hwangeRuralDistrictCouncil from '../Images-about/Hwange+Rural+District+Council.webp'
import lesediCommunityProjects from '../Images-about/Lesedi+Community+Projects.webp'
import matter from '../Images-about/Matter+Logo.webp'
import miracleMissionsVimba from '../Images-about/Miracle+Missions+Vimba.webp'
import rotaryInternational from '../Images-about/Rotary+International+Logo.webp'
import uncommon from '../Images-about/Uncommon.webp'

const partners = [
  { name: 'Matter', image: matter },
  { name: 'Uncommon', image: uncommon },
  { name: 'Lesedi Community Projects', image: lesediCommunityProjects },
  { name: "Africa's Eden", image: africasEden },
  { name: 'Children Community', image: childrenCommunity },
  { name: 'Hwange Rural District Council', image: hwangeRuralDistrictCouncil },
  { name: 'Rotary International', image: rotaryInternational },
  { name: 'Miracle Missions Vimba', image: miracleMissionsVimba },
]

const AboutFour = () => {
  return (
    <section className="w-full bg-white px-6 py-16 text-[#171717] sm:px-10">
      <div className="mx-auto max-w-212.5">
        <h2 className="text-center text-2xl font-medium">Our Story Now</h2>
        <p className="mx-auto mt-5 max-w-155 text-sm leading-relaxed text-[#66615e]">
          Jafuta Foundation has implemented a series of targeted, community-driven projects to
          address the pressing challenges faced by rural families. Each initiative was designed to
          promote education, equality, opportunity, and long-term self-reliance through practical
          and sustainable solutions.
        </p>

        <div className="mx-auto mt-12 grid max-w-125 grid-cols-1 gap-8 sm:grid-cols-2">
          <img
            src={manAtWork}
            alt="Young man taking part in a community skills program"
            className="aspect-3/4 w-full object-cover"
          />
          <img
            src={studentsLearning}
            alt="Students learning together with a tablet"
            className="aspect-3/4 w-full object-cover"
          />
        </div>

        <h2 className="mb-6 mt-12 text-center text-2xl font-medium">Our Partners</h2>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-4">
          {partners.map(({ name, image }) => (
            <div key={name} className="flex h-16 w-full items-center justify-center">
              <img
                src={image}
                alt={name}
                className="max-h-14 max-w-32.5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFour