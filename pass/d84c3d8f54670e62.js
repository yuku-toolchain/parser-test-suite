if (({
  valueOf: function () {
    return 1;
  }
}) - 1 !== 0) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) - 1 !== 0) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) - 1 !== 0) {}
try {
  if (({
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  }) - 1 !== 0) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (1 - ({
  toString: function () {
    return 1;
  }
}) !== 0) {}
if (1 - ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
}) !== 0) {}
try {
  1 - ({
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
  1 - ({
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