var assert = require('assert')
var displayEachRegNumber = function(RegNumbers){
var list = RegNumbers.split(",");
for(var i=0; i<list.length; i++) {
console.log(list[i]);

}
}
var results = displayEachRegNumber('CJ 12345,CA 456987,CY 789654');
<<<<<<< HEAD
assert.deepEqual(results,['CJ 12345,CA 456987,CY 789654']);
=======
>>>>>>> cbb5a7271cf0bcad2a3947df3e71371e3f5887a3
