try {
  var __obj = {
    toString: function () {
      return "1";
    },
    valueOf: function () {
      return new Object();
    }
  };
} catch (e) {}