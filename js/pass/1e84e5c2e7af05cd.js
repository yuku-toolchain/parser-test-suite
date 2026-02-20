var object = {
  valueOf: function () {
    return -2;
  },
  toString: function () {
    return "-2";
  }
};
if ("-1" < object) {}
var object = {
  valueOf: function () {
    return "-2";
  },
  toString: function () {
    return -2;
  }
};
if (object < "-1") {}