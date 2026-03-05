var initialBV, currentBV;
if (true) function f() {
  initialBV = f;
  f = 123;
  currentBV = f;
  return 'decl';
} else function _f() {}
f();