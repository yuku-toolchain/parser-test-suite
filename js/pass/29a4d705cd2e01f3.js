var body = "return true;";
try {
  var f = new Function(null, body);
} catch (e) {}