var proto = {
  length: 2
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[1] = "x";
child[2] = "y";