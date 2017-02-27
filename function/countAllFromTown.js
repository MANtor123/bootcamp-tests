var countAllFromTown = function (regNr) {
var x = regNr.split (",");
var y = [];  
for (var i=0; i<x.length; i++) {
var values = x[i];
if (values.startsWith("CL")){
  y.push(values);  
}
}
return (y.length);  
};
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

assert.deepEqual(fromStellies, 3)
