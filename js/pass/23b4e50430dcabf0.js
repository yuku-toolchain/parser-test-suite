var x;
x = true;
x ^= "1";
if (x !== 0) {}
x = "1";
x ^= true;
if (x !== 0) {}
x = new Boolean(true);
x ^= "1";
if (x !== 0) {}
x = "1";
x ^= new Boolean(true);
if (x !== 0) {}
x = true;
x ^= new String("1");
if (x !== 0) {}
x = new String("1");
x ^= true;
if (x !== 0) {}
x = new Boolean(true);
x ^= new String("1");
if (x !== 0) {}
x = new String("1");
x ^= new Boolean(true);
if (x !== 0) {}