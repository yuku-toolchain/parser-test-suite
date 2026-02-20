var stringSet;
var C = class {
  get ''() {
    return 'get string';
  }
  set ''(param) {
    stringSet = param;
  }
};
C.prototype[''] = 'set string';