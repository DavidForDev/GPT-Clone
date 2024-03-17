import * as React from "react";
const BurgerSvg = (props: any) => (
  <svg
    data-icon-name="menu"
    data-style="line"
    icon_origin_id={20837}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Line Color"
    id="menu"
    className="icon line"
    width={14}
    height={14}
    {...props}
  >
    <line
      style={{
        fill: "none",
        stroke: props.stroke ? props.stroke : "rgb(50, 48, 48)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
      y2={12}
      x2={21}
      y1={12}
      x1={3}
      id="secondary"
    />
    <path
      style={{
        fill: "none",
        stroke: props.stroke ? props.stroke : "rgb(50, 48, 48)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
      d="M9,18H21M3,6H15"
      id="primary"
    />
  </svg>
);
export default BurgerSvg;
