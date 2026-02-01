var stringSet;
var C = class {
  get 0() {
    return 'get string';
  }
  set 0(param) {
    stringSet = param;
  }
};
C.prototype['0'] = 'set string';