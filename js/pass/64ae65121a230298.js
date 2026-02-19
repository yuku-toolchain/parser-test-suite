var r = /c/y;
r.lastIndex = 1;
r[Symbol.replace]('abc', 'x');