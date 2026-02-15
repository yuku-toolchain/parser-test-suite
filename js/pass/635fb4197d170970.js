var x;
x = "1";
x /= undefined;
if (isNaN(x) !== true) {}
x = undefined;
x /= "1";
if (isNaN(x) !== true) {}
x = new String("1");
x /= undefined;
if (isNaN(x) !== true) {}
x = undefined;
x /= new String("1");
if (isNaN(x) !== true) {}