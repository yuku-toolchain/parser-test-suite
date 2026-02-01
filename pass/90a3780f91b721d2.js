var x = {};
if (eval(x) !== x) {}
x = new Number(1);
if (eval(x) !== x) {}
x = new Boolean(true);
if (eval(x) !== x) {}
x = new String("1+1");
if (eval(x) !== x) {}