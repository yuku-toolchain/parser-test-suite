var proto = {
  foo: 0
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.foo = 10;
Object.freeze(child);