var x = [];
var y = Symbol();
class C {
  [y] = (x.push("a"), "old_value");
  [y] = (x.push("b"), "same_value");
  [y] = (x.push("c"), "same_value");
}
var c = new C();