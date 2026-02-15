var x = "b";
class C {
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
}
var c = new C();