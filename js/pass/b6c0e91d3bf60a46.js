var initialBV, currentBV;
eval('if (false) function _f() {} else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }');
f();