var x = Symbol();
var y = Symbol();
var C = class {
  [x];
  [y] = 42;
  foo = "foobar";
  bar = "barbaz";
};
var c = new C();