var x = "b";
var C = class {
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
};
var c = new C();