var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    throw "intostr";
  }
};
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
try {
  var x = __obj.toLocaleUpperCase();
} catch (e) {
  if (e !== "intostr") {}
}