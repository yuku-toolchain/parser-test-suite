var re1 = /(?-s:^.$)/s;
var re2 = new RegExp("(?-s:^.$)", "s");
var re3 = /a.(?-s:b.b).c/s;
var re4 = new RegExp("a.(?-s:b.b).c", "s");