var object = {
  valueOf: function () {
    return "^";
  }
};
if (encodeURIComponent(object) !== "%5Bobject%20Object%5D") {}
var object = {
  valueOf: function () {
    return "";
  },
  toString: function () {
    return "^";
  }
};
if (encodeURIComponent(object) !== "%5E") {}
var object = {
  valueOf: function () {
    return "^";
  },
  toString: function () {
    return {};
  }
};
if (encodeURIComponent(object) !== "%5E") {}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return "^";
    }
  };
  if (encodeURIComponent(object) !== "%5E") {}
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return "^";
  }
};
if (encodeURIComponent(object) !== "%5E") {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "^";
  }
};
if (encodeURIComponent(object) !== "%5E") {}
try {
  var object = {
    valueOf: function () {
      return "^";
    },
    toString: function () {
      throw "error";
    }
  };
  encodeURIComponent(object);
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
  encodeURIComponent(object);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}