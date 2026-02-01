var proto = {
  length: 0
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 2;
child[1] = child;