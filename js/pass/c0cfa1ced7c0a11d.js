var __obj = {
  toString: function () {
    throw "intostr";
  }
};
var __obj2 = {
  valueOf: function () {
    throw "intoint";
  }
};
var __instance = new Number(10001.10001);
Number.prototype.lastIndexOf = String.prototype.lastIndexOf;
try {
  var x = __instance.lastIndexOf(__obj, __obj2);
} catch (e) {
  if (e !== "intostr") {}
}