import React from 'react'

const VisionThree = () => {
  return (
    <div className=''>

        <section className='h-100 bg-no-repeat    bg-center bg-cover' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6924281a79368207099d0dd5/78c937f3-8d51-4cab-9b9c-caa676ae4152/kids-africa-nonprofit.jpg')"}}>

           <div className=' items-center gap-5 pt-20 flex flex-col '>
                <span>
                  <h1 className='text-4xl text-white'>Subscribe to our newsletter.</h1>
                </span>

                <span>
                   <p className='font-me text-white'>Sign up to our quarterly newsletter to receive news and updates.</p>
                </span>

                <span>
                    <form>
                      <input className='bg-white  p-5'
                       type="email"
                       placeholder='Email Address'
                   />
                       <button className='bg-[rgb(66,109,119)] ml-3  p-5 text-white font-medium' type='submit'>
                         Sign Up
                       </button>
                    </form>
               </span>
           </div>


        </section>
      
    </div>
  )
}

export default VisionThree
