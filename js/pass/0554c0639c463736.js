var stringSet;
var obj = {
  get [1E+9]() {
    return 'get string';
  },
  set [1E+9](param) {
    stringSet = param;
  }
};
obj['1000000000'] = 'set string';