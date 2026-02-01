var stringSet;
class C {
  static get 'line\
Continuation'() {
    return 'get string';
  }
  static set 'line\
Continuation'(param) {
    stringSet = param;
  }
}
C['lineContinuation'] = 'set string';