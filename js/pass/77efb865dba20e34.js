var stringSet;
var obj = {
  get [0]() {
    return 'get string';
  },
  set [0](param) {
    stringSet = param;
  }
};
obj['0'] = 'set string';