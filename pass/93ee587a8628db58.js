if (({
  valueOf: function () {
    return 1;
  }
}) % 2 !== 1) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) % 2 !== 1) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) % 2 !== 1) {}
try {
  if (({
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  }) % 2 !== 1) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (1 % ({
  toString: function () {
    return 2;
  }
}) !== 1) {}
if (1 % ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 2;
  }
}) !== 1) {}
try {
  1 % ({
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 2;
    }
  });
} catch (e) {
  if (e !== "error") {}
}
try {
  1 % ({
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