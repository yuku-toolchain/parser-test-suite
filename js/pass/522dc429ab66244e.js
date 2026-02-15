var r = /a/g;
r.lastIndex = 3;
r[Symbol.match]('b');