function thrower() {}
var obj = {
  method({x = thrower()}) {}
};