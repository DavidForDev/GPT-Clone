import * as React from "react";
const TopArrowSvg = (props: any) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 6V18M12 6L7 11M12 6L17 11"
      stroke={` ${props.stroke ? props.stroke : "#000000"}`}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default TopArrowSvg;
