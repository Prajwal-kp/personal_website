import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
}

export const useTypewriter = ({
  text,
  speed = 75,
  delay = 0,
  loop = false,
  loopDelay = 2000
}: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const reset = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
    setIsDeleting(false);
  }, []);

  useEffect(() => {
    // Reset when text changes
    reset();
  }, [text, reset]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting
    if (!isTyping && !isDeleting && currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    // Typing logic
    if (isTyping && !isDeleting) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else if (loop) {
        // Pause at the end before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, loopDelay);
      }
    }

    // Deleting logic (only if loop is enabled)
    if (isDeleting && loop) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2); // Delete faster than type
      } else {
        // Reset to start the next loop
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setIsTyping(true);
        }, loopDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, isDeleting, isTyping, loop, loopDelay, speed, text]);

  return { displayText, isTyping, isComplete: currentIndex === text.length };
};