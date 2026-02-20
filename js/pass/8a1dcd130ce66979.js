var initialBV, currentBV;
eval('if (true) function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }');
f();