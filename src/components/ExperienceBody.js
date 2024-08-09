import React from 'react'

const BodyText = () => {
  return (
    <div className='bg-transparent p-4 flex-1 md:ml-12 lg:ml-24 max-w-[600px] overflow-hidden'>
      <p
        className='text-left text-2xl break-words'
        style={{
          fontFamily: 'Lucida Sans Typewriter ',
          letterSpacing: '-1.25px'
        }}
      >
        {' > '}In search for my first :]{' '}
      </p>
    </div>
  )
}

export default BodyText
