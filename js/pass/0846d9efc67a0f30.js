var initialBV, currentBV, varBinding;
(function () {
  switch (1) {
    default:
      function f() {
        initialBV = f;
        f = 123;
        currentBV = f;
        return 'decl';
      }
  }
  varBinding = f;
  f();
})();