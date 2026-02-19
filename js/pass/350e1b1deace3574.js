var stringSet;
var obj = {
  get [.1]() {
    return 'get string';
  },
  set [.1](param) {
    stringSet = param;
  }
};
obj['0.1'] = 'set string';