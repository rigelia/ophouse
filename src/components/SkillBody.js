import React from 'react'

const SkillBody = () => {
  return (
    <div className='bg-transparent p-4 flex-1 md:ml-12 lg:ml-24 max-w-[600px] overflow-hidden'>
      <p
        className='text-left text-2xl break-words'
        style={{
          fontFamily: 'Lucida Sans Typewriter ',
          letterSpacing: '-1.25px'
        }}
      >
        {' > '} Java <br />
        {' > '} Python <br />
        {' > '} Photography <br />
        {' > '} Image Processing <br />
      </p>
    </div>
  )
}

export default SkillBody
