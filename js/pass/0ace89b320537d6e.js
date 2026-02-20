var x = "b";
var C = class {
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
  *m() {
    return 42;
  }
};
var c = new C();