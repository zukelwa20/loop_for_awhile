//var assert = require('assert')
var shoppingList = function(grocery) {
  var List = grocery.split(',');
  for (var i = 0; i < List.length; i++) {
    console.log(List[i].trim());
  }
}
var results = shoppingList('1x bread, 6x hotdog rolls, 2x tubs of margarine');
//assert.equal(results,('1x bread, 6x hotdog rolls, 2x tubs of margarine'));
