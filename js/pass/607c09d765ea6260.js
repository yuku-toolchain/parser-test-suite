var numObj = new Number(3);
var preCheck = Object.isExtensible(numObj);
Object.seal(numObj);