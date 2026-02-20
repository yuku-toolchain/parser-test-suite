var initialBV, currentBV, varBinding;
(function () {
  eval('if (true) function f() { initialBV = f; f = 123; currentBV = f; return "decl"; } else ;varBinding = f;\
    f();');
})();