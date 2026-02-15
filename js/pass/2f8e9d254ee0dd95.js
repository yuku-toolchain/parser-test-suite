var __obj = {
  valueOf: 1,
  toString: function () {
    throw 'intostring';
  },
  charAt: String.prototype.charAt
};
try {
  var x = __obj.charAt();
} catch (e) {
  if (e !== 'intostring') {}
}