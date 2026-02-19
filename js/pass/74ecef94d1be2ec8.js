var a = [0, 1, 2];
a.splice(1, 2, 4);
if (a.length !== 2) {}
if (a[0] !== 0) {}
if (a[1] !== 4) {}