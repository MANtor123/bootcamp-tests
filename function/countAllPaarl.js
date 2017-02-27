var allPaarl = function (regNr) {
  var x = regNr.split (", ");

var y = [];  
for (var i=0; i<x.length; i++) {

var values = x[i];
if (values.startsWith("CJ")) {
  y.push(values);  
}
}

return (y);  
};
var test =  allPaarl("CJ 123 456, CA 262 600,CJ 26211, CJ 555151"); 
console.log (test); 
