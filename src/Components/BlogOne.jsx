import classroomImage from '../Images-home/Classroom.png'
import annualReportImage from '../Images-home/tablet-childs.webp'
import yearEndImage from '../Images-about/Girls_sports_africa.webp'
import batokaImage from '../Images-home/handcraft.png'

const newsletterPosts = [
  {
    date: 'April 2026',
    title: 'New Beginnings & Big Dreams',
    image: classroomImage,
    imageAlt: 'Children learning together in a classroom',
    paragraphs: [
      "It's hard to believe we are already in April - the year is flying by! And what a start it has been. We hit the ground running in January (and we haven't stopped yet!) as the new school year began.",
      'There is something incredibly special about this time of year. Watching our scholarship students - both new and returning - receive their uniforms and school supplies is always a deeply moving moment.',
    ],
  },
  {
    date: 'Mar 2026',
    title: '2025 Annual Report',
    image: annualReportImage,
    imageAlt: 'Children using a tablet together',
    paragraphs: [
      'The 2025 financial year was marked by consolidation, measurable impact, and strengthened institutional maturity for Jafuta Foundation. Operating in complex rural communities in the Chidobe and Matetsi Wards of Matabeleland North, the Foundation continued to deliver high-impact, community-driven programmes aligned with its mission:',
    ],
  },
  {
    date: 'Dec 2025',
    title: 'Jafuta Foundation 2025 Year End Reflection',
    image: yearEndImage,
    imageAlt: 'Young people playing sport together',
    paragraphs: [
      'As we close out 2025, we do so with full hearts and deep gratitude. This has been a year of remarkable progress on the ground - made possible by the belief, generosity, and encouragement of our supporters, partners, and friends.',
    ],
  },
  {
    date: 'Sept 2025',
    title: 'Celebrating our Batoka Creatives!',
    image: batokaImage,
    imageAlt: 'A craft maker creating beaded artwork',
    paragraphs: [
      "As we cross into the second half of the year, it’s incredible to reflect on how much has already happened — and how busy our team on the ground has been!",
    ],
  },
]

const BlogOne = () => {
  return (
    <section id="newsletter" className="px-6 pb-20 pt-40 sm:px-8">
      <h1 className="mb-16 text-center text-3xl font-normal text-[#302b28] sm:text-4xl">
        Jafuta Foundation Newsletters
      </h1>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2">
        {newsletterPosts.map((post) => (
          <article key={post.title}>
            <img
              src={post.image}
              alt={post.imageAlt}
              className="aspect-[1.57] w-full object-cover"
            />
            <p className="mt-3 text-sm text-[#514944]">{post.date}</p>
            <h2 className="mt-4 text-2xl font-normal text-[#302b28]">
              {post.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-[1.8] text-[#514944]">
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href="#newsletter"
              className="mt-7 inline-block text-[#398b91] underline underline-offset-2"
            >
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogOne