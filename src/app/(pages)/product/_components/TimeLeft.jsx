import React, { useEffect, useState } from 'react';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,

    hours: 12,

    minutes: 45,

    seconds: 5,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatNumber = (number) => number.toString().padStart(2, '0');
  return (
    <>
      <div className="py-3">
        <p className="font-medium text-[0.9rem] text-gray-600">
          Offer expires in:
        </p>

        <div className="flex items-center gap-[10px] mt-2">
          <div className="flex items-center justify-center flex-col gap-[0.2rem]">
            <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">
              {formatNumber(timeLeft.days)}
            </h5>
            <span className="text-[0.7rem]">Days</span>
          </div>
          <div className="flex items-center justify-center flex-col gap-[0.2rem]">
            <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">
              {formatNumber(timeLeft.hours)}
            </h5>
            <span className="text-[0.7rem]">Hours</span>
          </div>
          <div className="flex items-center justify-center flex-col gap-[0.2rem]">
            <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">
              {formatNumber(timeLeft.minutes)}
            </h5>
            <span className="text-[0.7rem]">Minutes</span>
          </div>
          <div className="flex items-center justify-center flex-col gap-[0.2rem]">
            <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">
              {formatNumber(timeLeft.seconds)}
            </h5>
            <span className="text-[0.7rem]">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLeft;
