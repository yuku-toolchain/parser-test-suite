if (({
  valueOf: function () {
    return 1;
  }
}) != true !== false) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) != 1 !== false) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) != "+1" !== false) {}
try {
  if (({
    valueOf: function () {
      return "+1";
    },
    toString: function () {
      throw "error";
    }
  }) != true !== false) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (({
  toString: function () {
    return "+1";
  }
}) != 1 !== false) {}
if (({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "+1";
  }
}) != "1" !== true) {} else {
  if (({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return "+1";
    }
  }) != "+1" !== false) {}
}
try {
  ({
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  }) != 1;
} catch (e) {
  if (e !== "error") {}
}
try {
  ({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  }) != 1;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}