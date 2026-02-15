var boolObj = new Boolean(false);
var preCheck = Object.isExtensible(boolObj);
Object.seal(boolObj);