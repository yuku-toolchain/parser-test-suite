var x;
if (eval("x = 1") !== 1) {}
if (eval("1") !== 1) {}
if (eval("'1'") !== '1') {}
x = 1;
if (eval("++x") !== 2) {}