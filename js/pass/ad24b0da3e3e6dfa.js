var m = new Map([['a', 1], ['b', 2], ['c', 3]]);
var e = m.entries();
e.next();
m.delete('b');
var n = e.next();
n = e.next();