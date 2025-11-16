// src/components/promo/CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  // Countdown timer calculation
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Corrected date: November 30, 2025 23:59:59
      const promotionEnd = new Date("November 30, 2025 23:59:59").getTime();
      const now = new Date().getTime();
      const difference = promotionEnd - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 sm:mt-16">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center shadow-xl">
        {/* Main Heading */}
        <h3 className="text-lg sm:text-xl font-bold mb-4">
          ⏰ Limited Time Offer Ends Soon!
        </h3>

        {/* Compact Timer */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[60px]">
              <span className="text-xl sm:text-2xl font-bold tabular-nums">
                {timeLeft.days.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs mt-1 opacity-90">Days</span>
          </div>

          {/* Separator */}
          <div className="text-xl font-bold mb-3">:</div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[60px]">
              <span className="text-xl sm:text-2xl font-bold tabular-nums">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs mt-1 opacity-90">Hours</span>
          </div>

          {/* Separator */}
          <div className="text-xl font-bold mb-3">:</div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[60px]">
              <span className="text-xl sm:text-2xl font-bold tabular-nums">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs mt-1 opacity-90">Mins</span>
          </div>
        </div>

        {/* Punchy Scarcity Message */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base font-semibold">
            🔥 FREE eye screening + Last chance for 30% OFF!
          </p>
          <p className="text-xs sm:text-sm opacity-90">
            Don't miss out - claim your voucher before time runs out!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${Math.max(5, (timeLeft.days / 15) * 100)}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-1 opacity-80">
            <span>Ends Nov 30</span>
            <span className="font-semibold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
            </span>
          </div>
        </div>
      </div>

      {/* Quick Urgency Note */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 font-medium">
          ⚡ <span className="text-red-600">Hurry!</span> This exclusive Black
          Friday deal won't last long.
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
