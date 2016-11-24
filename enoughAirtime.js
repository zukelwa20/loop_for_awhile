var assert = require('assert')
var enoughAirtime = function(usage, balance) {
  var usageAirtime = usage.split(',');
  var total = 0;
  var airTime = 50;
  for (var i = 0; i < usageAirtime.length; i++) {
    if (usageAirtime[i] === 'call') {
      total = total + 1.88;
    } else if (usageAirtime[i] === 'sms') {
      total = total + 0.75;
    } else if (usageAirtime[i] === 'data') {
      total = total + 12;
    } else {
      total = total + 0;
    }
  }
  balance = airTime - total;
  return balance.toFixed(2);
}
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data'));
assert.deepEqual(enoughAirtime('call,call,call,data,sms,sms,call,data'), 16.98);
