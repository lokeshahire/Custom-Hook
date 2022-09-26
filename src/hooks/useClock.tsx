import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return

  // Should use useClock hook.

  // return {
  //        hours: /** Current time in hours */,
  //        minutes: /** Current time in minutes */,
  //        seconds: /** Current time in seconds */,
  //       };

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [date, setDate] = useState<any>(new Date());

  const clock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    let timer = setInterval(() => {
      clock();
    }, 1000);
    return function resetClock() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    let HourHand = date.getHours();
    setHours(HourHand);
  });

  useEffect(() => {
    let Minutehand = date.getMinutes();
    setMinutes(Minutehand);
  });

  useEffect(() => {
    let Secondhand = date.getSeconds();
    setSeconds(Secondhand);
  });

  return { seconds, minutes, hours };
};

export default useClock;
