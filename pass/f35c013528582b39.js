var _;
var stringSet;
var C = class {
  static get [_ = 'str' + 'ing']() {
    return 'get string';
  }
  static set [_ = 'str' + 'ing'](param) {
    stringSet = param;
  }
};
C['string'] = 'set string';