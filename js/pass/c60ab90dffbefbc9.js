var obj;
var sample = {};
obj = {
  ['__proto__']: sample
};
obj = {
  ['__proto__']: null
};
obj = {
  ['__proto__']: undefined
};
var func = function () {};
obj = {
  ['__proto__']: func
};
var symbol = Symbol('Leo');
obj = {
  ['__proto__']: symbol
};
obj = {
  ['__proto__']: 42
};
obj = {
  ['__proto__']: ''
};
obj = {
  ['__proto__']: false
};