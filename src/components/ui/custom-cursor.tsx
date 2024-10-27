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
  const [isClicking, setIsClicking] = useState<boolean>(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Only update the trail if not hovering over buttons
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

    const handleMouseDown = (): void => setIsClicking(true);
    const handleMouseUp = (): void => setIsClicking(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updatePointerStatus);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updatePointerStatus);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, [position, isHoveringButton]); // Added isHoveringButton to the dependency array

  // Custom styles for the trail effect
  const trailStyles = (point: TrailPoint, index: number): React.CSSProperties => ({
    left: point.x - 5,
    top: point.y - 5,
    opacity: (15 - index) / 15,
    transform: `scale(${(15 - index) / 15})`,
    transition: 'transform 0.3s ease-out',
    backgroundColor: 'rgba(0, 150, 255, 0.4)', // Change color of trail
    position: 'absolute',
    borderRadius: '50%',
    width: '10px', // Adjust trail dot size
    height: '10px', // Adjust trail dot size
  });

  // Circle size changes based on hover state
  const circleSize = isHoveringButton ? 60 : 50; // Change size when hovering over a button

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.timestamp}
          style={trailStyles(point, index)}
        />
      ))}

      {/* Circle around the cursor */}
      <div
        className={`absolute rounded-full border-2 border-blue-400`}
        style={{
          left: position.x,
          top: position.y,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          borderRadius: '50%',
          transform: `translate(-50%, -50%)`, // Center the circle
          transition: 'width 0.2s ease, height 0.2s ease', // Smooth transition for size change
        }}
      />
    </div>
  );
};

export default CustomCursor;
