var fromWhere = function (regNr) {

if (regNr.startsWith ("CY")) {
return "Bellville";
}  

else if (regNr.startsWith("CJ")) {
return "Paarl";
} 
  
else if (regNr.startsWith("CA")) {
return "Cape Town";
}  

else {
return "Some other place!";
}  
};

assert.equal(fromWhere("CY"),"Bellville");
assert.equal(fromWhere("CJ"),"Paarl");
assert.equal(fromWhere("CA"),"Cape Town");
assert.equal(fromWhere("CL"),"Some other place!");
