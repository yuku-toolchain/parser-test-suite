var stringSet;
class C {
  get ''() {
    return 'get string';
  }
  set ''(param) {
    stringSet = param;
  }
}
C.prototype[''] = 'set string';