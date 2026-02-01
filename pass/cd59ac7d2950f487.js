var o = {
  valueOf: function () {}
};
var err = {
  valueOf: function () {
    throw new Error("ToInteger(start) runs before ToInteger(end)");
  }
};