var object = {
  valueOf: function () {
    return "1";
  },
  toString: function () {
    return 0;
  }
};
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "0";
  }
};