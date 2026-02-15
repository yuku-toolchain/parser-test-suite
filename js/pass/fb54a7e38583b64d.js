var calls = 0;
var A = {
  set ['a'](_) {
    calls++;
  }
};
A.a = 'A';
calls = 0;
var B = {
  set b(_) {},
  set ['b'](_) {
    calls++;
  }
};
B.b = 'B';
calls = 0;
var C = {
  set c(_) {},
  set ['c'](_) {},
  set ['c'](_) {
    calls++;
  }
};
C.c = 'C';
calls = 0;
var D = {
  set ['d'](_) {},
  set d(_) {
    calls++;
  }
};
D.d = 'D';