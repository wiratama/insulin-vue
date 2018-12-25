const fs = require('fs');
const utils = require('./utils');

function merge(orig, ext) {
  Object.keys(ext).forEach(key => (orig[key] = ext[key]));
}

merge(baseconfig, {});

module.exports = { merge };
