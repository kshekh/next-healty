import React, { useState, useEffect } from "react";
const achivement = 75; // add here the percentage value e.g 75% => 75
const strokeDashoffset = 563 - (563 * achivement) / 100;

const style = `
 .progress-circle {
   animation: animation 2s linear forwards;
   stroke-dasharray: 563;
   stroke-dashoffset: 563;
 }
 @keyframes animation {
   100% {
     stroke-dashoffset: ${strokeDashoffset};
   }
 }
`;

// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() = > {
//   if(counter == 75){
//     clearInterval();
//   }
//   else{
// counter += 0;
// number.innerHTML = counter + "%"
// }
// }, 1000)

// 日付・達成率
const Achivement = () => {
  const [achivementValue, setCount] = useState(0);
  const timer = () => setCount(achivementValue + 1);

  useEffect(() => {
    if (achivementValue == achivement) {
      return;
    }
    const id = setInterval(timer, 2);
    return () => clearInterval(id);
  }, [achivementValue]);

  return (
    <div className=" shrink-0 w-60 h-60 rounded-full relative flex justify-center items-center">
      <div className="flex justify-center items-center absolute inset-0">
        <div className="text-md text-white whitespace-nowrap inline-flex items-end gap-2">
          <span className="drop-shadow-shine">05/21</span>{" "}
          <span className="text-3xl drop-shadow-shine">{achivementValue}%</span>
        </div>
      </div>
      <style>{style}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200px"
        height="200px"
        className="-rotate-90"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#FFCC21" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          strokeLinecap="round"
          className="drop-shadow-shine progress-circle"
          fill="none"
          stroke="url(#GradientColor)"
          strokeWidth={"5"}
        />
      </svg>
    </div>
  );
};

export default Achivement;
