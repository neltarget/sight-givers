// src/components/promo/CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ endDate, startDate, config }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [progressPercentage, setProgressPercentage] = useState(0);

  // Countdown timer calculation
  useEffect(() => {
    const calculateTimeLeft = () => {
      const promotionEnd = new Date(endDate).getTime();
      const promotionStart = new Date(startDate).getTime();
      const now = new Date().getTime();
      const difference = promotionEnd - now;

      if (difference > 0) {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // Calculate progress percentage
        const totalPromotionTime = promotionEnd - promotionStart;
        const timeElapsed = totalPromotionTime - difference;
        const percentage = (timeElapsed / totalPromotionTime) * 100;

        // Ensure percentage is between 0-100
        setProgressPercentage(Math.min(100, Math.max(0, percentage)));
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgressPercentage(100);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  // Format date for display
  const formatDateForDisplay = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="mt-12 sm:mt-16">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center shadow-xl">
        {/* Main Heading */}
        <h3 className="text-lg sm:text-xl font-bold mb-4">{config.message}</h3>

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

          {/* Separator */}
          <div className="text-xl font-bold mb-3">:</div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[60px]">
              <span className="text-xl sm:text-2xl font-bold tabular-nums">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs mt-1 opacity-90">Secs</span>
          </div>
        </div>

        {/* Punchy Scarcity Message */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base font-semibold">
            {config.urgencyText}
          </p>
          <p className="text-xs sm:text-sm opacity-90">
            Don't miss out - claim your voucher before time runs out!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${config.progressBar.color} h-2 rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: `${Math.max(2, progressPercentage)}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-1 opacity-80">
            <span>Ends {formatDateForDisplay(endDate)}</span>
            <span className="font-semibold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s left
            </span>
          </div>
        </div>
      </div>

      {/* Quick Urgency Note */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 font-medium">
          ⚡ <span className="text-red-600">Hurry!</span> This exclusive offer
          won't last long.
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
