/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  return str.toUpperCase().split('').map((e, i) => e += e.repeat(i).toLowerCase()).join('-');
}

