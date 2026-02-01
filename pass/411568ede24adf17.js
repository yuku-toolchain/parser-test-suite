var stringSet;
var C = class {
  get 0o10() {
    return 'get string';
  }
  set 0o10(param) {
    stringSet = param;
  }
};
C.prototype['8'] = 'set string';