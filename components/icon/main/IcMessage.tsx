import React from "react";

interface IcMessageProps extends React.SVGProps<SVGSVGElement>{
    width?: string|number;
    height?: string|number;
    stroke?: string;
}
const IcMessage: React.FC<IcMessageProps> = ({width="24", height="24", stroke, ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke={stroke || "#9B9B9B"}
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke={stroke || "#9B9B9B"}
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IcMessage;
