try {
  var __obj = {
    toString: function () {
      return new Object();
    },
    valueOf: function () {
      return 1;
    }
  };
  if (String(__obj) !== "1") {}
} catch (e) {}