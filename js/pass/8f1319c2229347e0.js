var x;
x = "1";
x += 1;
if (x !== "11") {}
x = 1;
x += "1";
if (x !== "11") {}
x = new String("1");
x += 1;
if (x !== "11") {}
x = 1;
x += new String("1");
if (x !== "11") {}
x = "1";
x += new Number(1);
if (x !== "11") {}
x = new Number(1);
x += "1";
if (x !== "11") {}
x = new String("1");
x += new Number(1);
if (x !== "11") {}
x = new Number(1);
x += new String("1");
if (x !== "11") {}
if ("x" + 1 !== "x1") {}
x = 1;
x += "x";
if (x !== "1x") {}