var body = "return \"A\";";
try {
  var f = new Function(void 0, body);
} catch (e) {}