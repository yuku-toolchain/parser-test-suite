var stringSet;
var obj = {
  get ['def\u0061ult']() {
    return 'get string';
  },
  set ['def\u0061ult'](param) {
    stringSet = param;
  }
};
obj['default'] = 'set string';