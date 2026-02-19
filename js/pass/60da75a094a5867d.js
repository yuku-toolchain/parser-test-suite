var regObj = new RegExp();
var preCheck = Object.isExtensible(regObj);
Object.seal(regObj);