var x = new Array(0, 1, 2, 3);
if (x.join() !== "0,1,2,3") {}
x = [];
x[0] = 0;
x[3] = 3;
if (x.join() !== "0,,,3") {}
x = [];
x[0] = 0;
if (x.join() !== "0") {}