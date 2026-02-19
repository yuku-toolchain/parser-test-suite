if (+new Number() !== 0) {}
if (+new Number(0) !== 0) {}
if (isNaN(+new Number(Number.NaN) !== true)) {}
if (+new Number(null) !== 0) {} else {
  if (1 / +new Number(null) !== Number.POSITIVE_INFINITY) {}
}
if (isNaN(+new Number(void 0) !== true)) {}
if (+new Number(true) !== 1) {}
if (+new Number(false) !== +0) {} else {
  if (1 / +new Number(false) !== Number.POSITIVE_INFINITY) {}
}
if (+new Boolean(true) !== 1) {}
if (+new Boolean(false) !== +0) {} else {
  if (1 / +new Boolean(false) !== Number.POSITIVE_INFINITY) {}
}
if (isNaN(+new Array(2, 4, 8, 16, 32)) !== true) {}
var myobj1 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  },
  valueOf: function () {
    return "[object MyObj]";
  }
};
if (isNaN(+myobj1) !== true) {}
var myobj2 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  },
  valueOf: function () {
    return "9876543210";
  }
};
if (+myobj2 !== 9876543210) {}
var myobj3 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "[object MyObj]";
  }
};
if (isNaN(+myobj3) !== true) {}
var myobj4 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  }
};
if (+myobj4 !== 67890) {}
var myobj5 = {
  ToNumber: function () {
    return 12345;
  }
};
if (isNaN(+myobj5) !== true) {}