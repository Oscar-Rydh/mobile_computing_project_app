/**
 * Returns different keys depending on node runtime environment
 * @param {String} key 
 */
export const prodOrDevKey = key => process.env.NODE_ENV === 'production' ? key : `dev_${key}`