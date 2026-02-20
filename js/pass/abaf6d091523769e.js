var constr = Error.prototype.constructor;
var err = new constr();
Error.prototype.toString = Object.prototype.toString;