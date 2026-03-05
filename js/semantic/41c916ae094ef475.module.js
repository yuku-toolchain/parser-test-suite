var initialBV, currentBV, varBinding;
(function () {
  if (true) function f() {
    initialBV = f;
    f = 123;
    currentBV = f;
    return 'decl';
  } else function _f() {}
  varBinding = f;
  f();
})();