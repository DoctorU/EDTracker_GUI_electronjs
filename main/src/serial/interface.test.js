const assert = require('assert');

const interface = require ('./interface');
const responses = require('./responses')
function assertEqualRegexps(reg1, reg2) {
  assert.equal(reg1.toString(), reg2.toString());
}
describe ('serial/interface', () => {
  it('contains mapping for all responses', function() {
    const responsesKeys = Object.keys(responses);
    let count = 0;
    for (const key of responsesKeys) {
      count ++;
      assert.ok(interface[responses[key]], key +':' + count);
    }
  });
  describe('command plus parameter responses', function(){
    it('contains regexp for AUTO_RECENTRE_MODE responses', function() {
      assertEqualRegexps(/^(#)\t([^\t]+)$/, interface[responses.AUTO_RECENTRE_MODE]);
    });

    it('contains regexp for BIAS_VALUES responses', function() {
      assertEqualRegexps(/^(B)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)$/, interface[responses.BIAS_VALUES]);
    });
    it('contains regexp for DRIFT responses', function() {
      assertEqualRegexps(/^(D)\t([^\t]+)$/, interface[responses.DRIFT]);
    });
    it('contains regexp for INFO responses', function() {
      assertEqualRegexps(/^(I)\t([^\t]+)$/, interface[responses.INFO]);
    });
    it('contains regexp for MAGNO_MATRIX responses', function() {
      assertEqualRegexps(/^(q)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)$/, interface[responses.MAGNO_MATRIX]);
    });
    it('contains regexp for MAGNO_MATRIX_RAW responses', function() {
      assertEqualRegexps(/^(Q)\t([^\t]+)\t([^\t]+)\t([^\t]+)$/, interface[responses.MAGNO_MATRIX_RAW]);
    });
    it('contains regexp for MESSAGE responses', function() {
      assertEqualRegexps(/^(M)\t([^\t]+)$/, interface[responses.MESSAGE]);
    });
    it('contains regexp for ORIENTATION responses', function() {
      assertEqualRegexps(/^(O)\t([^\t]+)$/, interface[responses.ORIENTATION]);
    });
    it('contains regexp for POLLING_MODE responses', function() {
      assertEqualRegexps(/^(p)\t([^\t]+)$/, interface[responses.POLLING_MODE]);
    });
    it('contains regexp for SCALING_MODE responses', function() {
      assertEqualRegexps(/^(s)\t([^\t]+)$/, interface[responses.SCALING_MODE]);
    });
    it('contains regexp for TEMPERATURE responses', function() {
      assertEqualRegexps(/^(T)\t([^\t]+)$/, interface[responses.TEMPERATURE]);
    });
  });
  describe('command only responses', function() {
    it('contains regexp for BIAS_ADJ_ENABLED_X responses', function() {
      assertEqualRegexps(/^(x)$/, interface[responses.BIAS_ADJ_ENABLED_X]);
    });
    it('contains regexp for BIAS_ADJ_ENABLED_XYZ responses', function() {
      assertEqualRegexps(/^(a)$/, interface[responses.BIAS_ADJ_ENABLED_XYZ]);
    });
    it('contains regexp for BIAS_ADJ_ENABLED_Y responses', function() {
      assertEqualRegexps(/^(y)$/, interface[responses.BIAS_ADJ_ENABLED_Y]);
    });
    it('contains regexp for BIAS_ADJ_ENABLED_Z responses', function() {
      assertEqualRegexps(/^(z)$/, interface[responses.BIAS_ADJ_ENABLED_Z]);
    });
    it('contains regexp for HELLO_BUSY responses', function() {
      assertEqualRegexps(/^(h)$/, interface[responses.HELLO_BUSY]);
    });
    it('contains regexp for RECENTRE_CONFIRMED responses', function() {
      assertEqualRegexps(/^(R)$/, interface[responses.RECENTRE_CONFIRMED]);
    });
    it('contains regexp for SILENT responses', function() {
      assertEqualRegexps(/^(S)$/, interface[responses.SILENT]);
    });  
    it('contains regexp for VERBOSE responses', function() {
      assertEqualRegexps(/^(V)$/, interface[responses.VERBOSE]);
    });
  
  
  });
})