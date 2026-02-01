var initialBV, currentBV;
(0, eval)('if (false) function _f() {} else function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }');
f();