var __obj = {
  toString: function () {
    throw "intostr";
  }
};
__obj.toLowerCase = String.prototype.toLowerCase;
try {
  var x = __obj.toLowerCase();
} catch (e) {
  if (e !== "intostr") {}
}