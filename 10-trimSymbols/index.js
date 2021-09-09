/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let str = "";
  for (let i = 0; i < size; i++)
    str += "$1";

  if (size === undefined)
    return string;
  if (size === 0)
    return '';

  return string.replace(/(.)\1{2,}/g, str);
}
