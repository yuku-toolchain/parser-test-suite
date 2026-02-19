var r = /a/y;
r.lastIndex = 1;
r[Symbol.match]('aba');