var stringSet;
class C {
  get 'line\
Continuation'() {
    return 'get string';
  }
  set 'line\
Continuation'(param) {
    stringSet = param;
  }
}
C.prototype['lineContinuation'] = 'set string';