"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/common";
import { Aeroplane, Heart, Home, Snow } from "@/components/Icons";
import { BANNER_TITLES } from "@/utils/constant";
import Link from "next/link";
import Lottie from "react-lottie-player";
import AeroplaneAnimation from "@/components/Animations/aeroplane.json";
import HomeAnimation from "@/components/Animations/home.json";
import HeartAnimation from "@/components/Animations/heart.json";
import AnythingAnimation from "@/components/Animations/anything.json";

const ICON_COMPONENTS = [
  <Aeroplane fill="#56C3A0" />,
  <Home fill="#6366F1" />,
  <Heart fill="#EF4444" />,
  <Snow fill="#6b7280" />,
];

const ICONS = [
  AeroplaneAnimation,
  HomeAnimation,
  HeartAnimation,
  AnythingAnimation,
];

export const Banner = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const intervalRef = useRef(null);

  const getNextIconIndex = (currentIndex) =>
    (currentIndex + 1) % ICON_COMPONENTS.length;

  const startIconInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIconIndex((prevIndex) => getNextIconIndex(prevIndex));
    }, 5000);
  };

  useEffect(() => {
    startIconInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-20 px-5 py-20">
      <div className="flex flex-col gap-5 lg:text-left text-center">
        <div className="text-4xl font-semibold">
          <h1>
            Less stress when <br />
            sharing expenses
          </h1>
          <h1
            key={`icon-${activeIconIndex}`}
            className={BANNER_TITLES[activeIconIndex].className}
          >
            {BANNER_TITLES[activeIconIndex].title}
          </h1>
        </div>
        <div className="flex gap-2">
          {ICON_COMPONENTS.map((icon, index) => (
            <div
              key={`icon-${index}`}
              onClick={() => {
                setActiveIconIndex(index);
                startIconInterval();
              }}
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
        <Link href="/signup">
          <Button
            title="Signup"
            className="bg-primary text-white py-4"
            containerStyles="md:w-40 w-full lg:mx-0 mx-auto"
          />
        </Link>
      </div>
      <div className="flex items-center lg:justify-end lg:mt-0 justify-center mt-5">
        <Lottie
          key={`icon-${activeIconIndex}`}
          loop
          play
          animationData={ICONS[activeIconIndex]}
          className="lg:w-[400px] w-60"
        />
      </div>
    </div>
  );
};
