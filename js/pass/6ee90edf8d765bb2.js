var __obj = {
  valueOf: 1,
  toString: function () {
    throw 'intostring';
  },
  charCodeAt: String.prototype.charCodeAt
};
try {
  var x = __obj.charCodeAt();
} catch (e) {
  if (e !== 'intostring') {}
}