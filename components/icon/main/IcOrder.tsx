import React from "react";

interface IcOrderProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

const IcOrder: React.FC<IcOrderProps> = ({
  width = 16,
  height = 16,
  stroke = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.6666 2.66663H12C12.3536 2.66663 12.6927 2.8071 12.9428 3.05715C13.1928 3.3072 13.3333 3.64634 13.3333 3.99996V13.3333C13.3333 13.6869 13.1928 14.0261 12.9428 14.2761C12.6927 14.5262 12.3536 14.6666 12 14.6666H3.99996C3.64634 14.6666 3.3072 14.5262 3.05715 14.2761C2.8071 14.0261 2.66663 13.6869 2.66663 13.3333V3.99996C2.66663 3.64634 2.8071 3.3072 3.05715 3.05715C3.3072 2.8071 3.64634 2.66663 3.99996 2.66663H5.33329"
        stroke={stroke || "white"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.33337H6.00004C5.63185 1.33337 5.33337 1.63185 5.33337 2.00004V3.33337C5.33337 3.70156 5.63185 4.00004 6.00004 4.00004H10C10.3682 4.00004 10.6667 3.70156 10.6667 3.33337V2.00004C10.6667 1.63185 10.3682 1.33337 10 1.33337Z"
        stroke={stroke || "white"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcOrder;
