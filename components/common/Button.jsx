"use client";
import Image from "next/image";
import { Oval } from "react-loader-spinner";

const Loading = () => (
  <Oval
    height={16}
    width={16}
    color="#fff"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#fff"
    strokeWidth={6}
    strokeWidthSecondary={6}
  />
);

const Icon = ({ icon, styles }) => (
  <Image
    className={styles}
    width={16}
    height={16}
    src={icon}
    alt="button-icon"
  />
);

export const Button = ({
  title,
  prefixIcon,
  suffixIcon,
  onClick,
  disabled = false,
  type,
  className,
  py = "py-3",
  px,
  loading = false,
  fontSize = "text-md",
  prefixIconStyles,
  suffixIconStyles,
  containerStyles = "w-full",
  shadow = "md",
}) => {
  const isDisabled = loading || disabled;
  const buttonColor = isDisabled
    ? "bg-gray-300 cursor-not-allowed hover:shadow-none py-4"
    : className;

  return (
    <div className={containerStyles}>
      <button
        onClick={onClick}
        disabled={isDisabled}
        type={type}
        className={`${className} rounded-md w-full ${py} ${px} flex gap-4 justify-center items-center hover:shadow-${shadow} ${buttonColor}`}
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="flex gap-2 items-center">
            {prefixIcon && <Icon icon={prefixIcon} styles={prefixIconStyles} />}
            <p className={`${fontSize} tracking-wide font-semibold`}>{title}</p>
            {suffixIcon && <Icon icon={suffixIcon} styles={suffixIconStyles} />}
          </div>
        )}
      </button>
    </div>
  );
};
