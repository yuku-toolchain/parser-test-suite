var stringSet;
var C = class {
  get 'def\u0061ult'() {
    return 'get string';
  }
  set 'def\u0061ult'(param) {
    stringSet = param;
  }
};
C.prototype['default'] = 'set string';