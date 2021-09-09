export const sameParityFilter = (arr = []) => {
  return arr.filter((el, i, arr) => el % 2 === arr[0] % 2);
}
