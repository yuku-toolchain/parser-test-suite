var x;
x = null;
x >>>= undefined;
if (x !== 0) {}
x = undefined;
x >>>= null;
if (x !== 0) {}
x = undefined;
x >>>= undefined;
if (x !== 0) {}
x = null;
x >>>= null;
if (x !== 0) {}