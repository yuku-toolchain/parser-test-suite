var flagsArg;
var re = {};
re.constructor = function () {};
re.constructor[Symbol.species] = function (_, flags) {
  flagsArg = flags;
  return /./y;
};
re.flags = '';
RegExp.prototype[Symbol.split].call(re, '');
re.flags = 'abcd';
RegExp.prototype[Symbol.split].call(re, '');
re.flags = 'Y';
RegExp.prototype[Symbol.split].call(re, '');
re.flags = 'y';
RegExp.prototype[Symbol.split].call(re, '');
re.flags = 'abycd';
RegExp.prototype[Symbol.split].call(re, '');