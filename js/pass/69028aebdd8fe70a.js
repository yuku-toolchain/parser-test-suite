var body = Object("return \'A\'");
try {
  var f = new Function(body);
} catch (e) {}