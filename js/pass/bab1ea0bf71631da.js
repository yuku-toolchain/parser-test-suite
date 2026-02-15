try {
  var __obj = {
    valueOf: function () {
      return new Object();
    },
    toString: function () {
      return new Object();
    }
  };
  Number(__obj);
} catch (e) {}