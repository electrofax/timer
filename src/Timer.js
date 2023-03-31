import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }, [minutes]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div>
      <h1>
        Timer: {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
