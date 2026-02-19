var stringSet;
var obj = {
  get ['def\u{61}ult']() {
    return 'get string';
  },
  set ['def\u{61}ult'](param) {
    stringSet = param;
  }
};
obj['default'] = 'set string';