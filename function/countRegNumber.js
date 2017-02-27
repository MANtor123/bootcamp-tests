var countRegNumber = function (regNr) {

var control = regNr.split(",");
console.log(control.length);
return control.length;
};

countRegNumber('CA 182736,CY 523519,CJ 812328');
