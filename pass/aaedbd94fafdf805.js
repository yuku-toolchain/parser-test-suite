var initialBV, currentBV;
eval('if (false) ; else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }');
f();