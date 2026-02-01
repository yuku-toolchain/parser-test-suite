var stringSet;
var obj = {
  get [0b10]() {
    return 'get string';
  },
  set [0b10](param) {
    stringSet = param;
  }
};
obj['2'] = 'set string';