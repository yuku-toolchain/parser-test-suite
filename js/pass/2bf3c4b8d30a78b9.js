var _;
var stringSet;
var C = class {
  get [_ = 'str' + 'ing']() {
    return 'get string';
  }
  set [_ = 'str' + 'ing'](param) {
    stringSet = param;
  }
};
C.prototype['string'] = 'set string';