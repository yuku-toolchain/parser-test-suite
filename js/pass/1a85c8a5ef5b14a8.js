var regexp = /./g;
regexp.lastIndex = {
  valueOf() {
    return 2;
  }
};
var str = 'abcd';
var iter = regexp[Symbol.matchAll](str);
regexp.lastIndex = 0;