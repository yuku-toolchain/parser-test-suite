var __instance = {
  toString: function () {
    throw "intostring";
  }
};
var __obj = {
  toString: function () {
    throw "infirstarg";
  }
};
__instance.concat = String.prototype.concat;
try {
  String.prototype.concat.call(__instance, __obj, notexist);
} catch (e) {
  if (e !== "intostring") {}
}
var notexist;