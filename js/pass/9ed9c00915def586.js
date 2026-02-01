var _;
var stringSet;
var obj = {
  get [[_ = 'str' + 'ing']]() {
    return 'get string';
  },
  set [[_ = 'str' + 'ing']](param) {
    stringSet = param;
  }
};
obj['string'] = 'set string';