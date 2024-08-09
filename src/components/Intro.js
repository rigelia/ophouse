import React from 'react'
import useTypingEffect from '../effects/useTypingEffect'

const Intro = () => {
  const { displayedText = '', blink } = useTypingEffect('   Greetings!', 50)

  const textWithoutLastChar = displayedText.slice(0, -1)
  const lastChar = displayedText.slice(-1)

  return (
    <div
      className='flex flex-col bg-gray items-left p-4 md:ml-12 lg:ml-24'
      style={{
        fontFamily: 'Lucida Sans Typewriter, monospace',
        letterSpacing: '-1.25px'
      }}
    >
      <h1 className='text-left text-6xl'>
        {textWithoutLastChar}
        {displayedText && (
          <span style={{ visibility: blink ? 'visible' : 'hidden' }}>
            {lastChar}
          </span>
        )}
      </h1>
    </div>
  )
}

export default Intro
