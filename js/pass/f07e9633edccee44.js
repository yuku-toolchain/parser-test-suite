var object = {
  valueOf: function () {
    return "%5E";
  }
};
if (decodeURIComponent(object) !== "[object Object]") {}
var object = {
  valueOf: function () {
    return "";
  },
  toString: function () {
    return "%5E";
  }
};
if (decodeURIComponent(object) !== "^") {}
var object = {
  valueOf: function () {
    return "%5E";
  },
  toString: function () {
    return {};
  }
};
if (decodeURIComponent(object) !== "^") {}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return "%5E";
    }
  };
  if (decodeURIComponent(object) !== "^") {}
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return "%5E";
  }
};
if (decodeURIComponent(object) !== "^") {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "%5E";
  }
};
if (decodeURIComponent(object) !== "^") {}
try {
  var object = {
    valueOf: function () {
      return "%5E";
    },
    toString: function () {
      throw "error";
    }
  };
  decodeURIComponent(object);
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
  decodeURIComponent(object);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}