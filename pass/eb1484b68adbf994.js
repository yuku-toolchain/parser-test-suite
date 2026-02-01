if ((({
  valueOf: function () {
    return 1;
  }
}) | 0) !== 1) {}
if ((({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) | 0) !== 1) {}
if ((({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) | 0) !== 1) {}
try {
  if ((({
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  }) | 0) !== 1) {}
} catch (e) {
  if (e === "error") {} else {}
}
if ((0 | ({
  toString: function () {
    return 1;
  }
})) !== 1) {}
if ((0 | ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
})) !== 1) {}
try {
  0 | ({
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
  0 | ({
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