// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let newArr = [];
  let tempArr = [];
  let count = 1;

  for (let j = 0; j < arr.length; j++) {
    if (count <= size) {
      tempArr.push(arr[j]);
      count++;
    }
    else {
      newArr.push(tempArr);
      tempArr = [];
      tempArr.push(arr[j]);
      count = 2;
    }
  }

  return newArr;
};
