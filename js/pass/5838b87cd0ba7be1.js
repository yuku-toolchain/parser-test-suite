var initialBV, currentBV;
eval('{ function f() { initialBV = f; f = 123; currentBV = f; return "decl"; } }');
f();