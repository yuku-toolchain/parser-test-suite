var object = {
  valueOf: function () {
    return 0;
  },
  toString: function () {
    return 1;
  }
};
if (String(object) !== "1") {}
var object = {
  valueOf: function () {
    return 0;
  },
  toString: function () {
    return {};
  }
};
if (String(object) !== "0") {}