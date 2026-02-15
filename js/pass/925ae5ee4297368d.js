var x;
x = true;
x += "1";
if (x !== "true1") {}
x = "1";
x += true;
if (x !== "1true") {}
x = new Boolean(true);
x += "1";
if (x !== "true1") {}
x = "1";
x += new Boolean(true);
if (x !== "1true") {}
x = true;
x += new String("1");
if (x !== "true1") {}
x = new String("1");
x += true;
if (x !== "1true") {}
x = new Boolean(true);
x += new String("1");
if (x !== "true1") {}
x = new String("1");
x += new Boolean(true);
if (x !== "1true") {}