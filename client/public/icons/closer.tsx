import * as React from "react";
const CloserSvg = (props: any) => (
  <svg
    data-icon-name="cross"
    data-style="line"
    icon_origin_id={20398}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="cross"
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
      y2={5}
      x2={5}
      y1={19}
      x1={19}
      id="primary"
    />
    <line
      style={{
        fill: "none",
        stroke: props.stroke ? props.stroke : "rgb(50, 48, 48)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
      y2={19}
      x2={5}
      y1={5}
      x1={19}
      data-name="primary"
      id="primary-2"
    />
  </svg>
);
export default CloserSvg;
