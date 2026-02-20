var body = {
  toString: function () {
    return "return 1;";
  }
};
try {
  var f = new Function(body);
} catch (e) {}