import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <div className="text-3xl font-bold">
      <Typewriter
        words={["Your unique journey, Unlocked with Path Mania"]}
        loop={0} // No loop needed since it's just one sentence
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterEffect;
