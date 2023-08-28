export const getFirstWord = (str) => {
  return str?.split(" ")[0];
};

export const capitalize = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
