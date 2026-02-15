var x;
x = "1";
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= "1";
if (x !== 0) {}
x = new String("1");
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= new String("1");
if (x !== 0) {}