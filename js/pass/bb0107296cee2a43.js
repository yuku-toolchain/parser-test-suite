var x;
x = "1";
x -= "1";
if (x !== 0) {}
x = new String("1");
x -= "1";
if (x !== 0) {}
x = "1";
x -= new String("1");
if (x !== 0) {}
x = new String("1");
x -= new String("1");
if (x !== 0) {}
x = "x";
x -= "1";
if (isNaN(x) !== true) {}
x = "1";
x -= "x";
if (isNaN(x) !== true) {}