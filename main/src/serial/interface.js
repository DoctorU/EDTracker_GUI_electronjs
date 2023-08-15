/*
 * Defines the map between response values and the format that's expected.
 */
const responses = require('./responses');
const JSON = require('json-stringify-safe');
function createResponseString(command, format=undefined) {
  var pattern = new String().concat('^(', command, ')');
  if (format !== undefined) {
    for (form of format) {
      pattern = pattern.concat('\\t(', form, ')');
      
    }
  }
  pattern = pattern.concat('$') //always end in a dollar!
  return new RegExp(pattern);
}
function values(number) {
  return new Array(number).fill('[^\\t]+');
  
}
let __exports = {};
//set default values for all things:
console.log('responses', responses);
for (const response of Object.keys(responses)) {
  console.log(response, '=', responses[response]);
  __exports[responses[response]] = createResponseString(responses[response]);
}

//now specials
//TODO; replace parsing strings with regexps!
__exports[responses.MESSAGE] = createResponseString(responses.MESSAGE, values(1));
__exports[responses.MAGNO_MATRIX] = createResponseString(responses.MAGNO_MATRIX, values(16));
__exports[responses.MAGNO_MATRIX_RAW] = createResponseString(responses.MAGNO_MATRIX_RAW, values(3));
__exports[responses.SCALING_MODE] = createResponseString(responses.SCALING_MODE, values(1));
__exports[responses.POLLING_MODE] = createResponseString(responses.POLLING_MODE, values(1));
__exports[responses.AUTO_RECENTRE_MODE] = createResponseString(responses.AUTO_RECENTRE_MODE, values(1));
__exports[responses.INFO] = createResponseString(responses.INFO, values(1));
__exports[responses.DRIFT] = createResponseString(responses.DRIFT, values(1));
__exports[responses.TEMPERATURE] = createResponseString(responses.TEMPERATURE, values(1));
__exports[responses.ORIENTATION] = createResponseString(responses.ORIENTATION, values(1));
__exports[responses.BIAS_VALUES] = createResponseString(responses.BIAS_VALUES, values(6));
console.log('exports defined', __exports);
module.exports = __exports;