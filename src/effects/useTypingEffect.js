import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed) => {
  const [displayedText, setDisplayedText] = useState('');
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!text) return;

    setDisplayedText('');
    let index = 0;

    const startTyping = () => { 
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    };

    const typingTimeout = setTimeout(startTyping, speed);

    
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(blinkInterval);
    };
  }, [text, speed]);
  return { displayedText, blink };
};

export default useTypingEffect; 