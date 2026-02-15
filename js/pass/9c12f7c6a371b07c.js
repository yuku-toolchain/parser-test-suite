var __obj = {
  toString: function () {
    return f;
    function f() {}
  }
};
__obj.valueOf = function () {
  throw "invalueof";
};
try {
  var __str = new String(__obj);
} catch (e) {
  if (e !== "invalueof") {}
}