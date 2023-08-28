"use client";
import { useState } from "react";

export const Tooltip = ({ content, children, position, cursor }) => {
  const [show, setShow] = useState(false);

  const tooltipClass = {
    left: "right-full transform top-1/2 -translate-y-1/2",
    right: "left-full transform top-1/2 -translate-y-1/2",
    top: "bottom-full transform right-1/2 translate-x-1/2",
    bottom: "top-full transform right-1/2 translate-x-1/2",
  }[position];

  const svgClass = {
    left: "absolute text-gray-800 h-3 w-3 -right-2 top-1/2 transform -translate-y-1/2",
    right:
      "absolute text-gray-800 h-3 w-3 -left-2 top-1/2 transform -translate-y-1/2",
    top: "absolute text-gray-800 h-3 w-3 left-1/2 -bottom-2 transform -translate-x-1/2",
    bottom:
      "absolute text-gray-800 h-3 w-3 left-1/2 -top-2 transform -translate-x-1/2",
  }[position];

  const trianglePoints = {
    left: "255,127.5 0,0 0,255",
    right: "0,127.5 255,0 255,255",
    top: "127.5,255 0,0 255,0",
    bottom: "127.5,0 0,255 255,255",
  }[position];

  return (
    <div
      className={`relative ${cursor ? cursor : "cursor-default"}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={`absolute !w-28 z-10 text-center bg-gray-800 text-white rounded py-3 px-2 ${tooltipClass} animate-fadeIn`}
        >
          {content}
          <svg
            className={svgClass}
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points={trianglePoints} />
          </svg>
        </div>
      )}
    </div>
  );
};
