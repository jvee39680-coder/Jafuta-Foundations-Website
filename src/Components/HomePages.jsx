
import womenEmpowermentImage from '../Images-home/women-africa-hero-image.webp'
import educationImage from '../Images-home/tablet-childs.webp'
import waterImage from '../Images-home/Tap-water.png'
import livelihoodsImage from '../Images-home/woman-garden-africa.webp'
import conservationImage from '../Images-home/Animals.png'
import artsImage from '../Images-home/handcraft.png'
import Hero from './hero'
import HomeThree from './HomeThree'
import HomeTwo from './HomeTwo'
import HomeFo from './HomeFo'

const HomePages = () => {
  return (
    <main className="w-full">

      <Hero />
      <HomeTwo />
       

      <HomeThree 
        title="Women & Youth Empowerment"

        description="Through deepened impact in gender empowerment, girls’ dignity, education, scholarships,
         and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence, and develop meaningful livelihoods"

        image={womenEmpowermentImage}
  
      />

      <HomeThree 
        title="Education & Digital Access"

        description="We strengthen rural education through supplementary and informal 
        learning, teacher development & training, learning resources, scholarships, and 
        access to technology—bridging the digital divide and expanding education opportunities for rural children and youth. "

        image={educationImage}
        button=<button>Learn More</button>
        reverse={true}
      />

       <HomeThree 
        title="Water, Sanitation (WASH) & Health"

        description="Improving health and livelihoods by expanding access to solar-powered boreholes/wells, 
        clean and accessible water points, safe sanitation, hygiene education, mobile health clinics, and 
        mental health education and counselling within rural communities."
        image={waterImage}
  
      />

      <HomeThree 
        title="Livelihoods & Food Security"

        description="Our Livelihoods & Food Security Programme supports communities through 
        nutritional community gardens, climate-smart agriculture, and the growing and distribution
        of food-bearing and indigenous trees"
        
        image={livelihoodsImage}

        reverse={true}
  
      />

      <HomeThree 
        title="Conservation & Community Co-Existence"

        description="We protect wildlife while supporting the communities that live alongside it. 
        Through education, conflict-mitigation, habitat restoration, and conservation-linked livelihoods
        , we  can help people and wildlife to better coexist safely and sustainably."
        image={conservationImage}
  
      />

       <HomeThree 
        title="Creativity, Arts & Culture"

        description="From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe’s 
        identity through artistic and visual expression."
        image={artsImage}
         reverse={true}
  
      />

      <h1 className=' pl-23 pt-20 pb-10 text-4xl font-medium text-gray-800'>Community Voices</h1>
     

      <HomeFo />
       <p className='text-5xl pt-20 pr-140 text-gray-700  ml-24'> 
        "With the support from donors, we have been able to serve our community better than ever."</p>

        <p className='pl-23 pb-20 pt-10'>— Gail van jaarsveldt, Director</p>

        <section className='bg-no-repeat text-white w-310 bg-cover  bg-center flex items-center flex-row justify-center gap-80 ml-13 mb-10 h-100'

        style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6924281a79368207099d0dd5/edfef77c-e8e9-4f9b-bc0b-065bd39b9504/woman-hands-beads-africa.jpg')"}}
        
        >


          <div className=' '>
            <h1 className='pb-5 text-4xl font-medium text-white'>Contact us</h1>
            <p className='pb-5 '>Feel free to contact us with any questions. </p>
            <p className='font-medium'>Email</p>
            <p>Email: gcvj@jafuta.org</p>

          </div>

          <div className='mb-18'>
            <h1 className='text-4xl font-medium mb-5'>Subscribe</h1>
            <p>Sign up to our quarterly newsletter to receive news and updates.</p>
          </div>




        </section>


    </main>

    

    
    
  )
}

export default HomePages
