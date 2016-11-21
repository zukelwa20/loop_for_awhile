var displayEachRegNumber = function(RegNumbers){
var list = RegNumbers.split(",");
for(var i=0; i<list.length; i++) {
console.log(list[i]);
}
}
displayEachRegNumber('CJ 12345,CA 456987,CY 789654');
