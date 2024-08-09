import React from 'react'

const BodyText = () => {
  return (
    <div className='bg-transparent p-4 flex-1 md:ml-12 lg:ml-24 max-w-[600px] overflow-hidden'>
      <p
        className='text-left text-2xl break-words'
        style={{ fontFamily: 'Lucida Sans Typewriter ', letterSpacing: '-1.25px' }}
      >
        {' > '}
        Atha typing! I'm an aspiring developer currently majoring in Information
        Systems in the University of Indonesia. I'm currently still trying to
        find my niche in the field, that's why I'm poking my head in different
        specialties and also open to try out new things! I have a strong sense
        of curiosity and adapt well even in a limited timeframe. Other than that, I like
        playing games and doing photography on the side.{' '}
      </p>
    </div>
  )
}

export default BodyText
