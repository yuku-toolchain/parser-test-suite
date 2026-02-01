if (({
  valueOf: function () {
    return 1;
  }
}) == true !== true) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) == 1 !== true) {}
if (({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) == "+1" !== true) {}
try {
  if (({
    valueOf: function () {
      return "+1";
    },
    toString: function () {
      throw "error";
    }
  }) == true !== true) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (({
  toString: function () {
    return "+1";
  }
}) == 1 !== true) {}
if (({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "+1";
  }
}) == "1" !== false) {} else {
  if (({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return "+1";
    }
  }) == "+1" !== true) {}
}
try {
  ({
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  }) == 1;
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
  }) == 1;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}