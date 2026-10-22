import childrenPlaying from '../Images-about/Girls_sports_africa.webp'
import girlAtSchool from '../Images-about/girl-school-africa.webp'

const storyBullets = [
  'Students walked long distances to school, often without access to textbooks, computers, or proper learning materials.',
  'Communities depended on unsafe and distant water sources, forcing families—especially women and children—to spend hours collecting water.',
  'Many young people had no access to employment, vocational training, or life skills, leaving them without hope for a sustainable future.',
  'Rural dwellers relied solely on subsistence farming in a dry, arid region with consistently low rainfall.',
  'Families faced chronic food insecurity and limited access to nutritious produce during the dry months.',
  'Girls often missed school due to lack of sanitary hygiene products, leading to absenteeism and educational disadvantage.'
]

const AboutThree = () => {
  return (
    <section className="bg-[#e5dfd8] px-4 py-16 text-[#2f2a2a] md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="pt-2">
            <h2 className="mb-6 text-[2.4rem] font-medium tracking-[-0.04em] text-[#2d2c2a]">
              Our Story
            </h2>

            <div className="max-w-[430px]">
              <h3 className="mb-4 text-[1.7rem] font-medium text-[#2d2c2a]">
                The People
              </h3>

              <p className="text-[1.02rem] leading-[1.8] text-[#47443f]">
                The rural communities of Ditshemo, Chisuma, and Sizinda villages faced severe
                challenges due to limited access to essential resources: clean drinking water,
                under-resourced schools, and minimal income generating opportunities. Most
                families depended on subsistence farming in a dry, arid region with scarce
                rainfall, making daily survival and progress an ongoing struggle.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src={childrenPlaying}
              alt="Children playing outdoors in a rural community"
              className="h-80 w-120 object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="overflow-hidden">
            <img
              src={girlAtSchool}
              alt="A young girl in a school setting"
              className="h-[370px] w-full object-cover md:h-[430px]"
            />
          </div>

          <div className="pt-1">
            <h3 className="mb-5 text-[1.8rem] font-medium text-[#2d2c2a]">The Reality</h3>

            <ul className="list-disc space-y-4 pl-6 text-[1.02rem] leading-[1.7] text-[#47443f]">
              {storyBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutThree
