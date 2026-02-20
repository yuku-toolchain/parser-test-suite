var x = [];
x[0] = undefined;
if (x.join() !== "") {}
x = [];
x[0] = null;
if (x.join() !== "") {}
x = Array(undefined, 1, null, 3);
if (x.join() !== ",1,,3") {}