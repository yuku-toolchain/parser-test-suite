var initialBV, currentBV, varBinding;
(function () {
  {
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