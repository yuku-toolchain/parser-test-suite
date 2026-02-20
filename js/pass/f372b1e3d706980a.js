var stringSet;
var obj = {
  get ['singleQuote']() {
    return 'get string';
  },
  set ['singleQuote'](param) {
    stringSet = param;
  }
};
obj['singleQuote'] = 'set string';