var assert = require('assert')
var allPaarl = function(RegNum) {
  var regList = RegNum.split(',');
  var paarlReg = [];
  for (var i = 0; i < regList.length; i++) {

    if (regList[i].startsWith('CJ')) {
      console.log(regList[i]);
      paarlReg.push(regList[i]);
    }
  }
  return paarlReg;

}

allPaarl('CJ 123456,CA 456987,CY 789654,CJ 456321');
assert.deepEqual(allPaarl('CJ 123456,CA 456987,CY 789654,CJ 456321'), ['CJ 123456', 'CJ 456321']);
