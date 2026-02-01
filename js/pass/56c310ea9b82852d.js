if (true == ({
  valueOf: function () {
    return 1;
  }
}) !== true) {}
if (1 == ({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
}) !== true) {}
if ("+1" == ({
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
}) !== true) {}
try {
  if (true == ({
    valueOf: function () {
      return "+1";
    },
    toString: function () {
      throw "error";
    }
  }) !== true) {}
} catch (e) {
  if (e === "error") {} else {}
}
if (1 == ({
  toString: function () {
    return "+1";
  }
}) !== true) {}
if ("1" == ({
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "+1";
  }
}) !== false) {} else {
  if ("+1" == ({
    valueOf: function () {
      return {};
    },
    toString: function () {
      return "+1";
    }
  }) !== true) {}
}
try {
  1 == ({
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
  1 == ({
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