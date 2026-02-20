var stringSet;
var C = class {
  static get ''() {
    return 'get string';
  }
  static set ''(param) {
    stringSet = param;
  }
};
C[''] = 'set string';