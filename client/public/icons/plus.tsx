import * as React from "react";
const PlusSvg = (props: any) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 1V9"
      stroke="white"
      strokeWidth={1.14286}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 5H9"
      stroke="white"
      strokeWidth={1.14286}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default PlusSvg;
