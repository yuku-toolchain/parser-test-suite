var initialBV, currentBV, varBinding;
(function () {
  eval('if (false) function _f() {} else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }varBinding = f;\
    f();');
})();