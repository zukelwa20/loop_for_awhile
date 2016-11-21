var assert = require('assert')
var firstPaarl = function(regNum){
var list = regNum.split(',');
  for(var i=0; i<list.length; i++){
if(list[i].startsWith("CJ")){
return list[i];
   }
  }
}
console.log(firstPaarl('CA 456987,CJ 123456,CJ 789654'));
assert.equal(firstPaarl('CJ 123456,CA 456987, CJ 456321'),'CJ 123456');
