var assert = require('assert')
var totalPhoneBill = function(phone) {
  var billList = phone.split(',');
  var total = 0;
  for (var i = 0; i < billList.length; i++) {
    if (billList[i] === 'call') {
      total = total + 2.75;
    } else if (billList[i] === 'sms') {
      total = total + 0.65;
    }
  }
  return total.toFixed(2);
}

console.log(totalPhoneBill('call,sms,call,sms,sms'));
assert.equal(totalPhoneBill('call,sms,call,sms,sms'), '7.45');
