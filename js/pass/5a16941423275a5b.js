var stringSet;
var obj = {
  get [0x10]() {
    return 'get string';
  },
  set [0x10](param) {
    stringSet = param;
  }
};
obj['16'] = 'set string';