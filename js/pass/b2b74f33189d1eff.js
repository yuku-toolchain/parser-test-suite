var stringSet;
var obj = {
  get [0.0000001]() {
    return 'get string';
  },
  set [0.0000001](param) {
    stringSet = param;
  }
};
obj['1e-7'] = 'set string';