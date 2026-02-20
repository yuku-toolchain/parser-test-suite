var subject = {};
var get = function () {};
var desc, result;
result = subject.__defineGetter__('stringAcsr', get);
desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');