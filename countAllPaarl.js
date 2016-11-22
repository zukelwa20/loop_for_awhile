var assert = require('assert')
var countAllPaarl = function(regNumbers) {

  var regList = regNumbers.split(',');
  var paarlReg = [];
  for (var i = 0; i < regList.length; i++) {
    if (regList[i].startsWith('CJ')) {
      //console.log(regList[i]);
      paarlReg.push(regList[i]);

   }
  }
  return paarlReg.length;
}
var results = countAllPaarl('CJ 123456,CY 456987,CJ 456321,CJ 456987, CA 789654')
console.log(countAllPaarl('CJ 123456,CY 456987,CJ 456321,CJ 456987, CA 789654'));
assert.deepEqual(results, 3);
