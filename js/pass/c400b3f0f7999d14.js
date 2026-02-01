var object = {
  valueOf: function () {
    return 1;
  }
};
if (object >>> 0 !== 1) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
if (object >>> 0 !== 1) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
if (object >>> 0 !== 1) {}
try {
  var object = {
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  };
  if (object >>> 0 !== 1) {}
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return 1;
  }
};
if (object >>> 0 !== 1) {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
if (object >>> 0 !== 1) {}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
  object >>> 0;
} catch (e) {
  if (e !== "error") {}
}
try {
  var object = {
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  };
  object >>> 0;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}