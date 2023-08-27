"use client";
import { useEffect } from "react";

export const Modal = ({ title, isVisible, onClose, children, className }) => {
  useEffect(() => {
    if (document && document.body) {
      document.body.style.overflowY = isVisible ? "hidden" : "auto";
    }
    return () => {
      if (document && document.body) {
        document.body.style.overflowY = "auto";
      }
    };
  }, [isVisible]);

  return (
    <>
      {isVisible === true && (
        <>
          <div
            className={`${className} slide-in-fwd-center z-[9998] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-filter backdrop-blur-md`}
            onClick={onClose}
          ></div>
          <div
            className={`slide-in-fwd-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]`}
          >
            <div className={`${className} bg-white rounded-xl py-5`}>
              <h1 className="text-2xl border-b px-5 pb-5 font-bold mb-5">
                {title}
              </h1>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};
