var initialBV, currentBV;
(0, eval)('if (false) ; else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }');
f();