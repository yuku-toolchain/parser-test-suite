if (({
  valueOf: function () {
    return -4;
  }
}) >>> 1 !== 2147483646) {}
if (({
  valueOf: function () {
    return -4;
  },
  toString: function () {
    return 0;
  }
}) >>> 1 !== 2147483646) {}
if (({
  valueOf: function () {
    return -4;
  },
  toString: function () {
    return {};
  }
}) >>> 1 !== 2147483646) {}
try {
  if (({
    valueOf: function () {
      return -4;
    },
    toString: function () {
      throw "error";
    }
  }) >>> 1 !== 2147483646) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (-4 >>> ({
  toString: function () {
    return 1;
  }
}) !== 2147483646) {}
if (-4 >>> ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
}) !== 2147483646) {}
try {
  -4 >>> ({
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  });
} catch (e) {
  if (e !== "error") {}
}
try {
  -4 >>> ({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  });
} catch (e) {
  if (e instanceof TypeError !== true) {}
}