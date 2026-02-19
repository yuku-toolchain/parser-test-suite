var body = "return this;";
var p = "1,1";
try {
  var f = new Function(p, body);
} catch (e) {}