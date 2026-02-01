var __obj = {
  toString: function () {
    throw "intostr";
  }
};
__obj.toUpperCase = String.prototype.toUpperCase;
try {
  var x = __obj.toUpperCase();
} catch (e) {
  if (e !== "intostr") {}
}