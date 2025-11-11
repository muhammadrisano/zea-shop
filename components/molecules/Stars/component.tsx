import React from "react";
import { StarProps } from "./interface";
import { IcStar } from "../../icon/main";

const Starts: React.FC<StarProps> = ({ value, max = 5, size = 20 }) => {
  const stars = Array.from({ length: max }, (_, i) => {
    const pos = i + 1;
    if (value >= pos) return "full";
    if (value >= pos - 0.5) return "half";
    return "empty";
  });
  return (
    <div
      className="flex items-center"
      aria-hidden="false"
      role="img"
      aria-label={`Rating: ${value} out of ${max} stars`}
    >
      {stars.map((type, i) => (
        <IcStar key={i} type={type} size={size} index={i} />
      ))}
    </div>
  );
};

export default Starts;
