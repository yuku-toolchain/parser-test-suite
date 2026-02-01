var body = "return a;";
var p = Object("a");
try {
  var f = new Function(p, body);
} catch (e) {}