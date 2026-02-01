var stringSet;
class C {
  get 0() {
    return 'get string';
  }
  set 0(param) {
    stringSet = param;
  }
}
C.prototype['0'] = 'set string';