var _;
var stringSet;
class C {
  get [_ = 'str' + 'ing']() {
    return 'get string';
  }
  set [_ = 'str' + 'ing'](param) {
    stringSet = param;
  }
}
C.prototype['string'] = 'set string';