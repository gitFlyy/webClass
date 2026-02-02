"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const moveButton = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setPosition({ 
        top: Math.random() * 80 + 10, 
        left: Math.random() * 80 + 10 
      });
    }, 500);
  };

  return (
    <body className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-200 h-200 text-6xl bg-green-700 text-white-400 items-center justify-center relative">
        TS BUTTON
          <button 
          className="bg-green-300 border-2 border-blue-400 w-50 h-25 text-2xl absolute transition-all duration-300"
          style={{ top: `${position.top}%`, left: `${position.left}%`, transform: "translate(-50%, -50%)" }}
          onClick={moveButton}
        >
          PRESS TO MOVE
        </button>
      </div>
    </body>
  );
}
