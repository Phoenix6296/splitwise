"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/common";
import { Aeroplane, Heart, Home, Snow } from "@/components/Icons";
import Image from "next/image";
import { BANNER_TITLES, ICON_IMAGES } from "@/utils/constant";

const ICON_COMPONENTS = [
  <Aeroplane fill="#56C3A0" />,
  <Home fill="#6366F1" />,
  <Heart fill="#EF4444" />,
  <Snow fill="#6b7280" />,
];

export const Banner = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const intervalRef = useRef(null);

  const startIconInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIconIndex(
        (prevIndex) => (prevIndex + 1) % ICON_COMPONENTS.length
      );
    }, 3000);
  };

  useEffect(() => {
    startIconInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleIconClick = (index) => {
    setActiveIconIndex(index);
    startIconInterval();
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-40 px-20 lg:mt-20 lg:py-10 py-5">
      <div className="flex flex-col gap-5 lg:text-left text-center">
        <div className="text-4xl font-semibold">
          <h1>
            Less stress when <br />
            sharing expenses
          </h1>
          <h1 className={BANNER_TITLES[activeIconIndex].className}>
            {BANNER_TITLES[activeIconIndex].title}
          </h1>
        </div>
        <div className="flex gap-2">
          {ICON_COMPONENTS.map((icon, index) => (
            <div
              key={index}
              onClick={() => handleIconClick(index)}
              className={`cursor-pointer lg:mx-0 mx-auto ${
                activeIconIndex === index ? "" : "opacity-30"
              }`}
            >
              {icon}
            </div>
          ))}
        </div>
        <h3>
          Less stress when sharing expenses with housemates. Keep track of your
          shared expenses and balances with housemates, trips, groups, friends,
          and family.
        </h3>
        <Button
          title="Signup"
          className="bg-primary text-white py-4"
          containerStyles="w-40 lg:mx-0 mx-auto"
        />
      </div>
      <div className="flex items-center lg:justify-end lg:mt-0 justify-center mt-5">
        <Image
          src={`/Assets/LandingPage/${ICON_IMAGES[activeIconIndex]}`}
          width={400}
          height={100}
          className="lg:w-[400px] w-60"
          alt="Home Banner Image"
        />
      </div>
    </div>
  );
};
