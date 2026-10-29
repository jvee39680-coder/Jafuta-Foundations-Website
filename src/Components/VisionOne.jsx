import visionImage from './ImagesVision/47a64eee-8ba0-4944-8c32-a81b1d80693b.png'

const VisionOne = () => {
  return (
    <div className=' h-240'>
       <main className=' flex flex-row gap-10  items-center'>
           <section className=' w-1/2 ml-10  mt-70'>
                <div className='mr-30'>
                  <h1 className='text-3xl font-medium text-gray-800 pb-17 '>“Everyone deserves to thrive with dignity and hope.”</h1>
                  <h1 className='text-3xl font-medium text-gray-700 pb-10'>Our Vision</h1>
                  <p>To foster self-sustaining community development in the Hwange District 
                  (Dibutibu, Sizinda, Chisuma, Monde and Matetsi) through education, empowerment,
                    and livelihood opportunities that build resilience and improve quality of life.</p>
                </div>

                <div className='mr-30'>
                  <h1 className='mt-10 text-3xl font-medium text-gray-700 pb-10'>Our Mission</h1>
                  <p>Jafuta Foundation is dedicated to empowering rural communities by providing 
                   increased access tnpm run devo essential resources and services, championing conservation,
                   advancing gender equality, fostering resilience, and promoting self-sufficiency.
                   Through collaborative efforts, we work to create sustainable environments that uplift lives 
                   and safeguard our shared future.
                   </p>
                </div>
        
            </section>

            <section className='w-1/2 pt-80'>

               <img className='' src={visionImage} alt="" />

            </section>

        </main>

        
      
    </div>
  )
}

export default VisionOne
