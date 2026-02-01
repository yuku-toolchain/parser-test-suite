var target = Object.create(Array.prototype);
var p = new Proxy(target, {});
var foo = 3;
with (target) {}