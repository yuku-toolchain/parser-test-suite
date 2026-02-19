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
Number.prototype.indexOf = String.prototype.indexOf;
try {
  var x = __instance.indexOf(__obj, __obj2);
} catch (e) {
  if (e !== "intostr") {}
}