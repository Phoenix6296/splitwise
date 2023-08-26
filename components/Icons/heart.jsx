export const Heart = ({ fill = "#FFFFFF", ...props }) => (
  <svg
    className="fill-current w-9 lg:w-12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 32.742"
    width={35}
    height={32.742}
    {...props}
  >
    <path
      d="M17.12 4.867 8.64-.049.161 4.867V22.07l16.958 9.83 16.958-9.83V4.867L25.598-.049z"
      fill={fill}
    />
  </svg>
);
