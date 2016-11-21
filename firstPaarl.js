var assert = require('assert')
var firstPaarl = function(regList){
  var list = regList.split(',');
  for(var i=0; i<list.length; i++){
    return list[i];
  }
};
console.log(firstPaarl('CJ 123456,CA 456987,CY 789654'));
assert.equal(firstPaarl('CJ 123456,CA 456987, CY 789654'),'CJ 123456');
