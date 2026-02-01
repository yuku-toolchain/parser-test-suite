var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
if (object + "" !== "1") {}
var object = {
  valueOf: function () {
    return "1";
  },
  toString: function () {
    return 0;
  }
};
if (object + 0 !== "10") {}