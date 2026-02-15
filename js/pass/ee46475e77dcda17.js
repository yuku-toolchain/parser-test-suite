var originalMatch = RegExp.prototype[Symbol.match];
var returnVal = {};
var result, thisVal, args;
RegExp.prototype[Symbol.match] = function () {
  thisVal = this;
  args = arguments;
  return returnVal;
};
try {
  result = ('target').match('string source');
} finally {
  RegExp.prototype[Symbol.match] = originalMatch;
}