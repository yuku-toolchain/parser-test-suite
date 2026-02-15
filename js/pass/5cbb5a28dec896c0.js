var body = {
  toString: function () {
    throw 7;
  }
};
try {
  var f = new Function(body);
} catch (e) {}