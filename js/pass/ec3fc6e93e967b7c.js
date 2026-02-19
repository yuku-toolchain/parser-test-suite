var x = "b";
var C = class {
  static async m() {
    return 42;
  }
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
};
var c = new C();
C.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);