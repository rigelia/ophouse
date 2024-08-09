import React, { useEffect, useRef } from 'react'
import Intro from './components/Intro'
import BodyText from './components/BodyText'
import Gallery from './components/Gallery'
import ExperienceHeader from './components/ExperienceHeader'
import ExperienceBody from './components/ExperienceBody'
import SkillHeader from './components/SkillHeader'
import SkillBody from './components/SkillBody'
import Socials from './components/Socials'

const imageUrls = ['/sky.jpg', '/skymoon.jpg', '/trainsky-fixed.jpg']

function App () {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      const triggerPoint = container.scrollHeight - container.clientHeight - 100 // 100px from the bottom

      if (container.scrollTop >= triggerPoint) {
        container.style.overflowY = 'auto'
      } else {
        container.style.overflowY = 'hidden'
      }
    }

    const container = containerRef.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='scrollable-container flex flex-col min-h-screen justify-center items-center p-4 mx-4 md:mx-8 max-w-screen-lg'
    >
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex flex-col flex-1 justify-start'>
          <Intro className='self-start w-full md:w-1/2 lg:w-1/3' />
          <BodyText className='w-full md:w-1/2 lg:w-1/3' />
        </div>
        <Gallery
          images={imageUrls}
          interval={7500}
          className='w-full md:w-1/2 lg:w-1/3 md:ml-4'
        />
      </div>

      <div className='flex flex-col md:flex-row w-full'>
        <ExperienceHeader className='self-start w-full md:w-1/2 lg:w-1/3' />
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <ExperienceBody className='w-full md:w-1/2 lg:w-1/3' />
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <SkillHeader />
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <SkillBody />
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <Socials />
      </div>
    </div>
  )
}

export default App
