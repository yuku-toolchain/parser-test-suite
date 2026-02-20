var initialBV, currentBV;
(0, eval)('switch (1) {' + '  case 1:' + '    function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }' + '}\
  ');
f();