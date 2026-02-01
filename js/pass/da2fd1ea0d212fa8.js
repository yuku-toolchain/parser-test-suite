var x;
x = null;
x -= undefined;
if (isNaN(x) !== true) {}
x = undefined;
x -= null;
if (isNaN(x) !== true) {}
x = undefined;
x -= undefined;
if (isNaN(x) !== true) {}
x = null;
x -= null;
if (x !== 0) {}