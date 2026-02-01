var p = {
  toString: function () {
    throw 1;
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