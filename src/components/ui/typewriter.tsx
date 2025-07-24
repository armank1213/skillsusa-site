/* import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}

export const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 1000, 
  className = '', 
  cursorClassName = '',
  onComplete 
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const texts = Array.isArray(text) ? text : [text];
  const targetText = texts[0] || '';

  useEffect(() => {
    if (!targetText) return;

    let charIndex = 0;
    setIsTyping(true);
    setCurrentText('');

    const typeInterval = setInterval(() => {
      if (charIndex < targetText.length) {
        setCurrentText(prev => prev + targetText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [targetText, speed, onComplete]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{currentText}</span>
    </div>
  );
};

// Specialized component for hero text
export const HeroTypewriter = ({ 
  text, 
  speed = 80, 
  delay = 2000,
  className = 'text-5xl md:text-7xl font-bold drop-shadow-lg'
}: {
  text: string | string[];
  speed?: number;
  delay?: number;
  className?: string;
}) => {
  return (
    <Typewriter
      text={text}
      speed={speed}
      delay={delay}
      className={className}
    />
  );
}; 
*/