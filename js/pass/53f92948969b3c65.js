var p = {
  toString: function () {
    return "a";
  }
};
var body = "return a;";
try {
  var f = new Function(p, body);
} catch (e) {}