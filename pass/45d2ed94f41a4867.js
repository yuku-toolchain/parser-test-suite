try {
  var __obj = {
    toString: function () {
      return new Object();
    }
  };
  String(__obj);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}