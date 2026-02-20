if (({
  valueOf: function () {
    return 2;
  }
}) >= 1 !== true) {}
if (({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 0;
  }
}) >= 1 !== true) {}
if (({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return {};
  }
}) >= 1 !== true) {}
try {
  if (({
    valueOf: function () {
      return 2;
    },
    toString: function () {
      throw "error";
    }
  }) >= 1 !== true) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (1 >= ({
  toString: function () {
    return 0;
  }
}) !== true) {}
if (1 >= ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 0;
  }
}) !== true) {}
try {
  1 >= ({
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 0;
    }
  });
} catch (e) {
  if (e !== "error") {}
}
try {
  1 >= ({
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