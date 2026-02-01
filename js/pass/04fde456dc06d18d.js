var stringSet;
class C {
  get 0.0000001() {
    return 'get string';
  }
  set 0.0000001(param) {
    stringSet = param;
  }
}
C.prototype['1e-7'] = 'set string';