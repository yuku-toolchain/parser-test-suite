var stringSet;
var obj = {
  get ['']() {
    return 'get string';
  },
  set [''](param) {
    stringSet = param;
  }
};
obj[''] = 'set string';