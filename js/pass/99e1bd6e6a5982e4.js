var originalSearch = RegExp.prototype[Symbol.search];
var returnVal = {};
var result, thisVal, args;
RegExp.prototype[Symbol.search] = function () {
  thisVal = this;
  args = arguments;
  return returnVal;
};
try {
  result = ('target').search('string source');
} finally {
  RegExp.prototype[Symbol.search] = originalSearch;
}