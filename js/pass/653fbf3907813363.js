var x;
x = true;
x &= "1";
if (x !== 1) {}
x = "1";
x &= true;
if (x !== 1) {}
x = new Boolean(true);
x &= "1";
if (x !== 1) {}
x = "1";
x &= new Boolean(true);
if (x !== 1) {}
x = true;
x &= new String("1");
if (x !== 1) {}
x = new String("1");
x &= true;
if (x !== 1) {}
x = new Boolean(true);
x &= new String("1");
if (x !== 1) {}
x = new String("1");
x &= new Boolean(true);
if (x !== 1) {}