import React from 'react'
import VisionOne from './VisionOne'
import VisionTwo from './VisionTwo'
import VisionThree from './VisionThree'

const VisionPages = () => {
  return (
    <div>
      
     <VisionOne/>
          
      <div className='flex flex-row  overflow-auto scrollbar-none'>

        <VisionTwo 
        heading='Integrity'

        paragraph='We act with transparency, accountability, and responsibility in stewarding every
         resource entrusted to us.'
        />

         <VisionTwo 
        heading='Respect'

        paragraph='We honour people, culture, and the environment, working in harmony with communities
         and traditional leadership.'
        />

         <VisionTwo 
        heading='Empowerment'

        paragraph='We build capacity, confidence, and opportunity—never dependency.'
        />

         <VisionTwo 
        heading='Innovation'

        paragraph='We embrace creativity, technology, and new ideas that drive sustainable change..'
        />

         <VisionTwo 
        heading='Collaboration'

        paragraph='We believe in meaningful partnerships with communities, donors, government, and the environment itself'
        />

         <VisionTwo 
        heading='Innovation'

        paragraph='We embrace creativity, technology, and new ideas that drive sustainable change..'
        />
        </div>
    
      <VisionThree/>
    </div>
  )
}

export default VisionPages
