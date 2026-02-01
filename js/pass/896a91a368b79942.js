var stringSet;
var obj = {
  get [0o10]() {
    return 'get string';
  },
  set [0o10](param) {
    stringSet = param;
  }
};
obj['8'] = 'set string';