/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
}
