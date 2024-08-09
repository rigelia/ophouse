import React from 'react'
const SkillHeader = () => {
  return (
    <div
      className='flex flex-col bg-gray items-left p-4 md:ml-12 lg:ml-24'
      style={{
        fontFamily: 'Lucida Sans Typewriter, monospace',
        letterSpacing: '-1.25px'
      }}
    >
      <h1 className='text-left text-6xl'> Skills</h1>
    </div>
  )
}

export default SkillHeader
