"use client";
import { useState, useEffect } from "react";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let numericValue = 0;
    let suffix = "";

    // Handle suffixes like '+', 'Lakh+', 'Sq.ft.'
    const match = value.match(/([\d.,]+)\s*(.*)/);
    if (match) {
      numericValue = parseFloat(match[1].replace(/,/g, ""));
      suffix = match[2];
    }

    let start = 0;
    const end = numericValue;
    const increment = end / (duration / 16.6); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16.6);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {Math.floor(count).toLocaleString()} {value.replace(/[\d.,\s]+/, "")}
    </span>
  );
};

const Stat = ({ num, label }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 shadow-sm">
    <div className="text-2xl md:text-3xl text-slate-800 whitespace-nowrap">
      <AnimatedNumber value={num} />
    </div>
    <div className="leading-tight">
      <div className="font-semibold">{label.split("\n")[0]}</div>
      <div className="text-sm text-gray-500">{label.split("\n")[1] || ""}</div>
    </div>
  </div>
);

export default function Counters() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-5">
      <Stat num="600+" label={"Happy Families"} />
      <Stat num="150+" label={"Registries Done"} />
      <Stat num="15+" label={"years of Building Trust"} />
      <Stat num="700+" label={"Units sold till date"} />
    </div>
  );
}
