export const Snow = ({ fill = "#FFFFFF", ...props }) => (
  <svg
    className="fill-current w-9 lg:w-12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 36.207"
    width={35}
    height={36.207}
    {...props}
  >
    <path
      d="M14.088 1.182v10.928L4.247 6.645 0.556 12.793l9.841 5.465 -9.841 5.464L4.248 29.871l9.841 -5.465v10.93h7.38V24.403l9.841 5.465L35 23.722l-9.841 -5.464L35 12.793l-3.691 -6.148 -9.841 5.465V1.182z"
      fill={fill}
    />
  </svg>
);
