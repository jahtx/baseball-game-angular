/**
 * Function to help create random data. Returns a random entry in the array.
 * @param {array} arr - Array supplying possible values
 * @return {*}
 */
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * Parses a URL for query parameters
 * @param {string} url - url to query
 *
 * @returns {object[]} - returns an array of query objects with key and value properties
 */
export const parseQuery = url => {
  const queries = url.substr(url.indexOf('?') + 1).split('&');
  return queries.map(query => ({
    key: query.substr(0, query.indexOf('=')),
    value: query.substr(query.indexOf('=') + 1)
  }));
};
