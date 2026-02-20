var x = "b";
var C = class {
  foo = "foobar";
  m() {
    return 42;
  }
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
  m2() {
    return 39;
  }
  bar = "barbaz";
};
var c = new C();