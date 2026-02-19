var subject = {};
var set = function () {};
var desc, result;
result = subject.__defineSetter__('stringAcsr', set);
desc = Object.getOwnPropertyDescriptor(subject, 'stringAcsr');