var stringSet;
var obj = {
  get ['line\
Continuation']() {
    return 'get string';
  },
  set ['line\
Continuation'](param) {
    stringSet = param;
  }
};
obj['lineContinuation'] = 'set string';