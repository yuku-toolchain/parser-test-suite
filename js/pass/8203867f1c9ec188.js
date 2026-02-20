var x;
x = "1";
x /= 1;
if (x !== 1) {}
x = 1;
x /= "1";
if (x !== 1) {}
x = new String("1");
x /= 1;
if (x !== 1) {}
x = 1;
x /= new String("1");
if (x !== 1) {}
x = "1";
x /= new Number(1);
if (x !== 1) {}
x = new Number(1);
x /= "1";
if (x !== 1) {}
x = new String("1");
x /= new Number(1);
if (x !== 1) {}
x = new Number(1);
x /= new String("1");
if (x !== 1) {}
x = "x";
x /= 1;
if (isNaN(x) !== true) {}
x = 1;
x /= "x";
if (isNaN(x) !== true) {}