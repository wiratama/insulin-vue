const utils = {};
module.exports = utils;

utils.isArray = arr => Array.isArray(arr);

utils.isObject = obj => !utils.isArray(obj) && (obj !== null) && (typeof obj === 'object');

utils.isString = str => typeof str === 'string';
