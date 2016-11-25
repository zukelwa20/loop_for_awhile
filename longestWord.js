var assert = require('assert')
var longestWord = function(SenTance){
  var FirstSentance = SenTance.split(' ');
 var longestWrd = "";
  var Lword = 0;
  for(var i=0; i<FirstSentance.length; i++){
    var FirstW = FirstSentance[i];
if(FirstW.length > Lword){
 Lword = FirstW.length;
 longestWrd = FirstW;
      }
}
   return longestWrd;
 }
 console.log(longestWord('find the longest word'));
assert.deepEqual(longestWord('find the longest word'), 'longest');
