var object = {
  valueOf: function () {
    return 1;
  }
};
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
if (parseFloat(object) !== 0) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
if (parseFloat(object) !== 1) {}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
  if (parseFloat(object) !== 1) {}
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return 1;
  }
};
if (parseFloat(object) !== 1) {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
if (parseFloat(object) !== 1) {}
try {
  var object = {
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  };
  parseFloat(object);
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
  parseFloat(object);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}