function thrower() {}
var obj = {
  method({x: y = thrower()}) {}
};