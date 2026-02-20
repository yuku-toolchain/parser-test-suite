var calls = 0;
var s = Symbol();
var A = {
  set ['a'](_) {
    calls++;
  },
  set [1](_) {
    calls++;
  },
  set [s](_) {
    calls++;
  }
};
A.a = 'A';
A[1] = 1;
A[s] = s;