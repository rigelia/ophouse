import React from 'react'
import '../index.css'

const images = [
  {
    src: '/icons8-instagram.svg',
    alt: 'Instagram Icon',
    link: 'https://www.instagram.com/fadiansah04/'
  },
  {
    src: '/icons8-linkedin.svg',
    alt: 'LinkedIn Icon',
    link: 'https://www.linkedin.com/in/fadiansahfatha/'
  },
  {
    src: '/icons8-github.svg',
    alt: 'GitHub Icon',
    link: 'https://github.com/rigelia'
  }
]

const Socials = () => {
  return (
    <div className='socials-container'>
      {images.map((image, index) => (
        <a key={index} href={image.link} className='social-link'>
          <img src={image.src} alt={image.alt} className='social-icon' />
        </a>
      ))}
    </div>
  )
}

export default Socials
