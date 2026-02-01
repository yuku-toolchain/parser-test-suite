var x;
x = "1";
x |= null;
if (x !== 1) {}
x = null;
x |= "1";
if (x !== 1) {}
x = new String("1");
x |= null;
if (x !== 1) {}
x = null;
x |= new String("1");
if (x !== 1) {}