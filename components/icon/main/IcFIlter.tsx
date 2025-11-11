import React from "react";

interface IcFilterProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

const IcFIlter: React.FC<IcFilterProps> = ({
  width = "20",
  height = "20",
  stroke,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    > 
      <path
        d="M18.3337 2.5H1.66699L8.33366 10.3833V15.8333L11.667 17.5V10.3833L18.3337 2.5Z"
        stroke={stroke || "#8E8E93"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcFIlter;
