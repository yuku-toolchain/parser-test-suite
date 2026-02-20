var initialBV, currentBV, varBinding;
(function () {
  eval('switch (1) {' + '  case 1:' + '    function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }' + '}\
    varBinding = f;\
    f();');
})();