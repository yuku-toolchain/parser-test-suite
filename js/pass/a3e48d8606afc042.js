var callCount = 0;
var callArgs;
var regexp = /\d/u;
regexp.constructor = {
  [Symbol.species]: function () {
    callCount++;
    callArgs = arguments;
    return /\w/g;
  }
};
var str = 'a*b';
var iter = regexp[Symbol.matchAll](str);