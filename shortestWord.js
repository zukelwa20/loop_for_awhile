var assert = require('assert')
var shortestWord = function(SenTance) {
  var Words = SenTance.split(' ');
  var shortestWrd = "";
  var Lword = 100;
  for (var i = 0; i < Words.length; i++) {
    var Sword = Words[i]
    if (Sword.length < Lword) {
      Lword = Sword.length
      shortestWrd = Sword
    }
  }
  return shortestWrd;
}
console.log(shortestWord('Check the shortest word'));
assert.deepEqual(shortestWord('Check the shortest word'), 'the');
