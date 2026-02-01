var F = function G() {};
F.prototype.a = {};
F.prototype.b = {};
var f = new F();
f.b = {};
f.c = {};
var result = Object.entries(f);