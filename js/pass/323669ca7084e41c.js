var body = "return this;";
try {
  var f = new Function(undefined, body);
} catch (e) {}