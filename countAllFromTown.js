var assert = require('assert')
var countAllFromTown = function(regNumbers, location) {
  var regList = regNumbers.split(',');
  var fromTown = [];
  for (var i = 0; i < regList.length; i++) {
    if (regList[i].startsWith(location)) {
      fromTown.push(regList[i]);
    }
  }
  return fromTown.length;
}
fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, 3);
