"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isMoving, setIsMoving] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [clickCount, setClickCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startMoving = () => {
    if (intervalRef.current) return;
    
    setIsMoving(true);
    setClickCount(prev => prev + 1);
    
    intervalRef.current = setInterval(() => {
      setPosition({ 
        top: Math.random() * 80 + 10, 
        left: Math.random() * 80 + 10 
      });
    }, speed);
  };

  const stopMoving = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsMoving(false);
    }
  };

  const resetPosition = () => {
    stopMoving();
    setPosition({ top: 50, left: 50 });
    setClickCount(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700">
      <div className="flex flex-col gap-6 p-8">
        {/* Stats Panel */}
        <div className="bg-slate-800 rounded-lg p-4 text-white text-center space-y-2">
          <div className="text-sm text-slate-400">Status: <span className={isMoving ? "text-green-400" : "text-red-400"}>{isMoving ? "Moving" : "Stopped"}</span></div>
          <div className="text-sm text-slate-400">Clicks: <span className="text-blue-400 font-bold">{clickCount}</span></div>
          <div className="text-sm text-slate-400">Speed: <span className="text-purple-400">{speed}ms</span></div>
        </div>

        {/* Game Container */}
        <div className="relative w-[800px] h-[600px] bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-2xl border-4 border-green-900 overflow-hidden">
          <div className="absolute top-4 left-4 text-4xl font-bold text-white drop-shadow-lg">
            Catch Me If You Can! 🎯
          </div>
          
          <button 
            className={`
              absolute px-6 py-3 rounded-lg font-semibold text-lg
              bg-gradient-to-r from-emerald-400 to-cyan-400 
              border-4 border-blue-500 
              shadow-lg hover:shadow-xl hover:scale-105
              transition-all duration-300
              ${isMoving ? 'animate-pulse' : ''}
            `}
            style={{ 
              top: `${position.top}%`, 
              left: `${position.left}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            onClick={startMoving}
          >
            {isMoving ? '🏃 CATCH ME!' : '▶️ START'}
          </button>
        </div>

        {/* Control Panel */}
        <div className="flex gap-4 justify-center">
          <button 
            onClick={stopMoving}
            disabled={!isMoving}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all"
          >
            ⏸️ Stop
          </button>
          <button 
            onClick={resetPosition}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
          >
            🔄 Reset
          </button>
          <select 
            value={speed}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
              if (intervalRef.current) {
                stopMoving();
                startMoving();
              }
            }}
            className="px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold cursor-pointer"
          >
            <option value={1000}>Slow 🐢</option>
            <option value={500}>Normal 🚶</option>
            <option value={250}>Fast 🏃</option>
            <option value={100}>Extreme 🚀</option>
          </select>
        </div>
      </div>
    </main>
  );
}
