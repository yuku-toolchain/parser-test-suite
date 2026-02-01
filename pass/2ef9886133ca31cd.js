var body = "return 1.1;";
try {
  var f = new Function(p, body);
} catch (e) {}
var p;