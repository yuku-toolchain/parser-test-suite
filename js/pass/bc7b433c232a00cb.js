if (String(new Number()) !== "0") {}
if (String(new Number(0)) !== "0") {}
if (String(new Number(Number.NaN)) !== "NaN") {}
if (String(new Number(null)) !== "0") {}
if (String(new Number(void 0)) !== "NaN") {}
if (String(new Number(true)) !== "1") {}
if (String(new Number(false)) !== "0") {}
if (String(new Boolean(true)) !== "true") {}
if (String(new Boolean(false)) !== "false") {}
if (String(new Array(2, 4, 8, 16, 32)) !== "2,4,8,16,32") {}
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
if (String(myobj1) !== "67890") {}
var myobj2 = {
  toNumber: function () {
    return 12345;
  },
  toString: function () {
    return {};
  },
  valueOf: function () {
    return "[object MyObj]";
  }
};
if (String(myobj2) !== "[object MyObj]") {}
var myobj3 = {
  toNumber: function () {
    return 12345;
  },
  valueOf: function () {
    return "[object MyObj]";
  }
};
if (String(myobj3) !== "[object Object]") {}