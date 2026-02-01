var body = "return this;";
var p = {
  toString: function () {
    return "z;x";
  }
};
try {
  var f = new Function(p, body);
} catch (e) {}