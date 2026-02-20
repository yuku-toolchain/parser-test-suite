var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    throw "intostr";
  }
};
var __obj2 = {
  valueOf: function () {
    throw "intointeger";
  }
};
__FACTORY.prototype.lastIndexOf = String.prototype.lastIndexOf;
var __instance = new __FACTORY(void 0);
try {
  var x = __instance.lastIndexOf(__obj, __obj2);
} catch (e) {
  if (e !== "intostr") {}
}
function __FACTORY(value) {
  this.value = value;
  this.toString = function () {
    return new Number();
  };
  this.valueOf = function () {
    return this.value + "";
  };
}