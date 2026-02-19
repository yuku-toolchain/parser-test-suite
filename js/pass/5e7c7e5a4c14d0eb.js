var initialBV, currentBV;
(0, eval)('{ function f() { initialBV = f; f = 123; currentBV = f; return "decl"; } }');
f();