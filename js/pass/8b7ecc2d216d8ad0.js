var x = [];
var C = class {
  y = (x.push("a"), "old_value");
  ["y"] = (x.push("b"), "another_value");
  "y" = (x.push("c"), "same_value");
  y = (x.push("d"), "same_value");
};
var c = new C();