'use client';

import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailPoint extends CursorPosition {
  timestamp: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState<boolean>(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (!isHoveringButton) {
        setTrail((prev) => [
          { x: e.clientX, y: e.clientY, timestamp: Date.now() },
          ...prev.slice(0, 14), // Keep only the latest 15 positions
        ]);
      }
    };

    const updatePointerStatus = (): void => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable =
        hoveredElement?.matches('button, a, input, select, [role="button"]') || false;
      setIsHoveringButton(isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updatePointerStatus);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updatePointerStatus);
      document.body.style.cursor = 'auto';
    };
  }, [position, isHoveringButton]);

  // Custom styles for the trail effect
  const trailStyles = (point: TrailPoint, index: number): React.CSSProperties => ({
    left: point.x - 5,
    top: point.y - 5,
    opacity: (15 - index) / 15,
    transform: `scale(${(15 - index) / 15})`,
    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    backgroundColor: 'rgba(0, 150, 255, 0.4)', // Change color of trail
    position: 'absolute',
    borderRadius: '50%',
    width: '8px', // Smaller trail dot size
    height: '8px', // Smaller trail dot size
  });

  // Circle size changes based on hover state
  const circleSize = isHoveringButton ? 70 : 50; // Change size when hovering over a button

  return (
    <div className="pointer-events-none fixed inset-0 z-50"> {/* Ensure z-index is high */}
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.timestamp}
          style={trailStyles(point, index)}
        />
      ))}

      {/* Circle around the cursor */}
      <div
        className={`absolute rounded-full border-4 border-blue-500 shadow-lg`}
        style={{
          left: position.x,
          top: position.y,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          borderRadius: '50%',
          transform: `translate(-50%, -50%)`, // Center the circle
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease', // Smooth transition for size change
          backgroundColor: isHoveringButton ? 'rgba(0, 150, 255, 0.8)' : 'rgba(0, 150, 255, 0.5)',
          zIndex: 9999, // Ensure the cursor is in front of other elements
        }}
      />
    </div>
  );
};

export default CustomCursor;
