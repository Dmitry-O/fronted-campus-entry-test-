export const getLastWordLength = str => {
  let arr = str.split(' ');
  return arr[arr.length - 1].length;
};
