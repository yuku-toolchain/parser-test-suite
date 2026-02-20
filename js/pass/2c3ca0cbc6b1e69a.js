var stringSet;
var obj = {
  get ['default']() {
    return 'get string';
  },
  set ['default'](param) {
    stringSet = param;
  }
};
obj['default'] = 'set string';