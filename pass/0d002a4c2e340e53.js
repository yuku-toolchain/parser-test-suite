if (new Number() + "" !== "0") {}
if (new Number(0) + "" !== "0") {}
if (new Number(Number.NaN) + "" !== "NaN") {}
if (new Number(null) + "" !== "0") {}
if (new Number(void 0) + "" !== "NaN") {}
if (new Number(true) + "" !== "1") {}
if (new Number(false) + "" !== "0") {}
if (new Boolean(true) + "" !== "true") {}
if (new Boolean(false) + "" !== "false") {}
if (new Array(2, 4, 8, 16, 32) + "" !== "2,4,8,16,32") {}
var myobj1 = {
  toNumber: function () {
    return 12345;
  },
  toString: function () {
    return 67890;
  },
  valueOf: function () {
    return "[object MyObj]";
  }
};
if (myobj1 + "" !== "[object MyObj]") {}
var myobj2 = {
  toNumber: function () {
    return 12345;
  },
  toString: function () {
    return 67890;
  },
  valueOf: function () {
    return {};
  }
};
if (myobj2 + "" !== "67890") {}
var myobj3 = {
  toNumber: function () {
    return 12345;
  }
};
if (myobj3 + "" !== "[object Object]") {}