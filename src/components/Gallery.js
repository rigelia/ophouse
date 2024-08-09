import React, { useState, useEffect } from 'react';
import '../index.css'; 

const Gallery = ({ images, interval = 3000 }) => { 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };

    const intervalId = setInterval(updateIndex, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="gallery">
      {images[currentIndex] ? (
        <img
          className="gallery-image" 
          src={`${process.env.PUBLIC_URL}${images[currentIndex]}`}
          alt={`Slide ${currentIndex}`}
          onError={(e) => (e.target.src = `${process.env.PUBLIC_URL}/fallback.jpg`)}
        />
      ) : (
        <p>Image not available</p> // if no image is available
      )}
    </div>
  );
};

export default Gallery;