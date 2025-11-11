import React from "react";
type StarType = {
  type: "full" | "half" | "empty";
  size?: number;
  index: number;
};

const IcStar:React.FC<StarType> = ({ type, size = 20, index = 1 }) => {
  const id = `starClip-${index}`;
  const stroke = "currentColor";
  const fillColor = "#fbbf24"; // amber-400
  const emptyColor = "transparent";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="text-yellow-400"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={type === "half" ? "12" : "24"} height="24" />
        </clipPath>
      </defs>

      {/* filled part (full or clipped half) */}
      <path
        d="M12 .587l3.668 7.431L24 9.748l-6 5.849L19.335 24 12 19.771 4.665 24 6 15.597 0 9.748l8.332-1.73L12 .587z"
        fill={type === "empty" ? emptyColor : fillColor}
        clipPath={type === "half" ? `url(#${id})` : undefined}
        stroke={stroke}
        strokeWidth="0"
      />

      {/* outline always on top for consistency */}
      <path
        d="M12 .587l3.668 7.431L24 9.748l-6 5.849L19.335 24 12 19.771 4.665 24 6 15.597 0 9.748l8.332-1.73L12 .587z"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="1"
      />
    </svg>
  );
};

export default IcStar;
