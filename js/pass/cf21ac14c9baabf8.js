var stringSet;
var C = class {
  get 0x10() {
    return 'get string';
  }
  set 0x10(param) {
    stringSet = param;
  }
};
C.prototype['16'] = 'set string';