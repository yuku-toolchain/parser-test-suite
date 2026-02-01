var x = "b";
var C = class {
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
  foo = "foobar";
  bar = "barbaz";
};
var c = new C();