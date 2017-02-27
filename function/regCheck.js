var regCheck = function (regNr , location) {

var From = regNr.endsWith (location);
 return From;
};
assert.equal (true,('76875 MP', 'MP'))
assert.equal (true,('76875 L', 'MP'))
assert.equal (false,('76875 MP', 'EC'))
assert.equal (false,('76875 MP', 'GP'))
