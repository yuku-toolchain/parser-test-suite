var numProto = Object.getPrototypeOf(new Number(42));
var s = Object.prototype.toString.call(numProto);