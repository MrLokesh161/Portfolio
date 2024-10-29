'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if screen width is 768px or less
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto'; // Show default cursor on mobile
      return;
    }

    const updateCursor = (e: MouseEvent): void => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    const updateCursorSize = (e: MouseEvent): void => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isHoveringButton: boolean = 
        hoveredElement?.matches('button, a, input, select, [role="button"], .icon-class') || false;

      if (cursorRef.current && ringRef.current) {
        const size = isHoveringButton ? 60 : 30;
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
        ringRef.current.style.width = `${size + 20}px`;
        ringRef.current.style.height = `${size + 20}px`;
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updateCursorSize);
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updateCursorSize);
      document.body.style.cursor = 'auto'; // Show default cursor on cleanup
    };
  }, [isMobile]);

  // Render the custom cursor only if not on a mobile screen
  if (isMobile) return null;

  return (
    <>
      {/* Ring around the cursor */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-40 rounded-full border-2 border-blue-500 opacity-50"
        style={{
          width: '30px',
          height: '30px',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 20px rgba(0, 255, 255, 0.8)`,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
      
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 rounded-full bg-blue-500 opacity-70"
        style={{
          width: '30px',
          height: '30px',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
