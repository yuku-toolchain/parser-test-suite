var initialBV, currentBV, varBinding;
(function () {
  eval('if (false) ; else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }varBinding = f;\
    f();');
})();