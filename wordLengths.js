var assert = require('assert')
var wordLengths = function(sentance){
var wOrds = sentance.split(' ');
var sumOfwords = 0;
for(var i=0; i<wOrds.length; i++){
sumOfwords = sumOfwords + wOrds[i].length;


}
return sumOfwords;
}
console.log(wordLengths("find the sum of the words"));
assert.deepEqual(wordLengths("find the sum of the words"),20);
