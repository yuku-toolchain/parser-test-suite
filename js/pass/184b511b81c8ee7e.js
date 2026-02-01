var stringSet;
var C = class {
  get 0b10() {
    return 'get string';
  }
  set 0b10(param) {
    stringSet = param;
  }
};
C.prototype['2'] = 'set string';