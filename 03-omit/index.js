/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let newObj = {};

  for (let key in obj)
    newObj[key] = obj[key];

  fields.forEach(el => {
    if (obj.hasOwnProperty(el))
      delete newObj[el];
  });

  return newObj;
};
