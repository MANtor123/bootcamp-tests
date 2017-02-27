var totalPhoneBill = function (bill) {

  var list =bill.split(", ");
  var sms = [];
  var calls = [];
    
  for(var i=0; i<list.length; i++) {
    var x = list[i];
    if (x == "call"){
      calls.push(x);
    }
    else if (x =="sms") {
      sms.push(x);
    }
  } 
  
  var total = (2.75 * (calls.length)) + (0.65 *(sms.length));
  return "R" + total.toFixed(2);
};
var test = totalPhoneBill ('call, sms, call, sms, sms');
console.log (test);
