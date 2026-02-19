if (true != ({
  valueOf: function () {
    return 1;
  }
}) !== false) {}
if (1 != ({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) !== false) {}
if ("+1" != ({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) !== false) {}
try {
  if (true != ({
    valueOf: function () {
      return "+1";
    },
    toString: function () {
      throw "error";
    }
  }) !== false) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (1 != ({
  toString: function () {
    return "+1";
  }
}) !== false) {}
if ("1" != ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "+1";
  }
}) !== true) {} else {
  if ("+1" != ({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return "+1";
    }
  }) !== false) {}
}
try {
  1 != ({
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
  1 != ({
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