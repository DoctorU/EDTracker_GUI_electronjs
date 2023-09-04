// https://trello.com/c/nG7IFMDN/27-add-command-line-shell-for-communicating-with-device-send-commands-store-them-to-a-file

const assert = require('assert');

const cli = require('./cli');
/*
Given the responses file will contain Tab-separated values.

When I run the script with a device, request and response files
Then the script will connect to the device in serial comms mode
And the script will check the request and response files exist 

When I enter a command 
Then the command is sent to the requests file 
And the command is sent to the device.

When the device sends data 
Then the send data will be prefixed with a  long ms timestamp and a tab
And the data is written, line by line, to the response file 

When I kill the script 
Then the command 'S' (Sshhh) will be sent
And the response 'S' will be received from the device
And the files will be closed
And the script will end.
*/
const BDD = {
  given: function(_f) {
    before(_f);
  },
  then: function(_msg, _f) {
    it('Then ' +_msg, _f);
  },
  when: function(_msg, _f) {
    describe('When '+_msg, _f);
  }
  
}
const givens = {
  "IAmConnected": function() {
    cli.start([requestFile], [responseFile], deviceFile);
  }
};
afterEach(function() {
  //TODO close the CLI connections.
  cli.close();
});
describe('util/cli', function() {
  BDD.when('I run the script with a device, request and response files', function(){
    //somehow capture that the request file has been opened? 
    BDD.then('the script will connect to the device in serial comms mode', function(){
      assert.ok(cli.isConnected());
    });
    BDD.then('the script will check the request and response files exist', function(){
      assert.ok(cli.filesAreValid());
    }); 
  });
  BDD.when('I enter a command', function(){
    BDD.given(givens[IAmConnected]);
    BDD.then('the command is sent to the requests file', function(){
      assert.fail();
    });
    BDD.then('the command is sent to the device', function(){
      assert.fail();
    });
  });
  BDD.when('the device sends data', function(){
    BDD.given(givens[IAmConnected]);
    it('the send data will be prefixed with a  long ms timestamp and a tab', function(){
      assert.fail();
    });
    it('the data is written, line by line, to the response file', function(){
      assert.fail();
    });
      
  });
  describe('I kill the script', function(){
    
    BDD.given(givens[IAmConnected]);
    it('the command "S" (Sshhh) will be sent', function(){
      assert.equals('S', cli.currentCommand);
      assert.fail();
    });
    it('the response "S" will be received from the device', function(){
      assert.fail();
    });
    it('the files will be closed', function(){
      assert.fail();
    });
    it('the script will end.', function(){
      assert.fail();
    });
      
  });

})