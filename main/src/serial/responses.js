/*
 * Lists all possible responses from the Serial interface. 
 * Represented as an Object, whose keys map from response name to response string. 
 */
const SILENT = 'S'
const HELLO = 'H';
const HELLO_BUSY = 'h';
const BIAS_ADJ_ENABLED_XYZ = 'a';
const BIAS_ADJ_ENABLED_X = 'x';
const BIAS_ADJ_ENABLED_Y = 'y';
const BIAS_ADJ_ENABLED_Z = 'z';
const VERBOSE = 'V';
const MESSAGE = 'M';
const MAGNO_MATRIX = 'q'; // +16 values
const MAGNO_MATRIX_RAW = 'Q'; // + 3 values
const SCALING_MODE = 's'; // 0=linear, 1=exponential
const POLLING_MODE = 'p'; // 0=hardware interrupt, 1=polling sensors
const AUTO_RECENTRE_MODE = '#' // 0=offset, 1=soft, 2=medium, 3=hard
const INFO = 'I';
const DRIFT = 'D';
const TEMPERATURE = 'T';
const ORIENTATION = 'O';
const RECENTRE_CONFIRMED = 'R';
const BIAS_VALUES = 'B';


module.exports = {
  SILENT: SILENT,
  HELLO: HELLO,
  HELLO_BUSY: HELLO_BUSY,
  BIAS_ADJ_ENABLED_XYZ: BIAS_ADJ_ENABLED_XYZ,
  BIAS_ADJ_ENABLED_X: BIAS_ADJ_ENABLED_X,
  BIAS_ADJ_ENABLED_Y: BIAS_ADJ_ENABLED_Y,
  BIAS_ADJ_ENABLED_Z: BIAS_ADJ_ENABLED_Z, 
  BIAS_VALUES: BIAS_VALUES,
  VERBOSE: VERBOSE,
  MESSAGE: MESSAGE,
  MAGNO_MATRIX: MAGNO_MATRIX,
  MAGNO_MATRIX_RAW: MAGNO_MATRIX_RAW,
  SCALING_MODE: SCALING_MODE,
  POLLING_MODE: POLLING_MODE,
  AUTO_RECENTRE_MODE: AUTO_RECENTRE_MODE,
  INFO: INFO,
  DRIFT: DRIFT,
  TEMPERATURE: TEMPERATURE,
  ORIENTATION: ORIENTATION,
  RECENTRE_CONFIRMED: RECENTRE_CONFIRMED
};