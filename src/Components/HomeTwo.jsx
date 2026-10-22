import React from 'react'

const HomeTwo = () => {
  return (
    <div className="flex flex-row items-center h-110 justify-center gap-10 px-6 py-16">
      <section className="flex w-1/2 flex-col gap-10">
        <h1 className="text-5xl/15 font- mr-20">
          Supporting education and community.
        </h1>
        <button type="button" className="w-fit  bg-[rgb(66,109,119)]   px-14 py-5 font-medium text-white">
          Our Vision
        </button>
        
      </section>

      <section className=" text-lg w-140 text-black mb-20">
       <p className='pb-5'>
        We provide rural families with access to quality education, digital technology,
        clean water, nutritional gardens, equal opportunities for girls, skills training,
        and income-generating initiatives.
       </p>
       Jafuta Foundation is nurturing healthier and more
        resilient communities by restoring dignity, strengthening independence, and inspiring
        lasting hope for generations to come.
       <p>

       </p>

      </section>
    </div>
  )
}

export default HomeTwo
