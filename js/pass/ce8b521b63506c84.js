var x, __evaluated;
x = "5+1|0===0";
__evaluated = eval(x);
if (__evaluated !== 7) {}
__evaluated = eval("2*" + x + ">-1");
if (__evaluated !== 11) {}