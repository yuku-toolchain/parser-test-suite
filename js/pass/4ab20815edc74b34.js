var p = {
  toString: function () {
    p = 1;
    return "a";
  }
};
var body = {
  toString: function () {
    throw "body";
  }
};
try {
  var f = new Function(p, body);
} catch (e) {}