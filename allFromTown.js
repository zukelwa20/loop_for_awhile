var assert = require('assert')
var allFromTown = function(regNumbers,location){
  var regList = regNumbers.split(',');
var fromTown = [];
  for(var i=0; i<regList.length; i++){
    if(regList[i].startsWith(location)){
    //console.log(regList[i]);
      fromTown.push(regList[i]);
    }
  }
return fromTown;
}
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
console.log(fromKuilsriver);
assert.deepEqual(fromKuilsriver, []);
