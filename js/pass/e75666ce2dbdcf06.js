var proto = {
  length: 2
};
var Con = function () {};
Con.prototype = proto;
var childOne = new Con();
childOne[1] = true;
var childTwo = new Con();
childTwo[2] = true;