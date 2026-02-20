var x;
x = "1";
x |= undefined;
if (x !== 1) {}
x = undefined;
x |= "1";
if (x !== 1) {}
x = new String("1");
x |= undefined;
if (x !== 1) {}
x = undefined;
x |= new String("1");
if (x !== 1) {}