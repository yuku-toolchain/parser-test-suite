var x = "b";
class C {
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
  foo = "foobar";
  bar = "barbaz";
}
var c = new C();