var strObj = new String("a");
var preCheck = Object.isExtensible(strObj);
Object.seal(strObj);