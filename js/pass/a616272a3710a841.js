var object = {
  valueOf: function () {
    return "%5E";
  }
};
if (decodeURI(object) !== "[object Object]") {}
var object = {
  valueOf: function () {
    return "";
  },
  toString: function () {
    return "%5E";
  }
};
if (decodeURI(object) !== "^") {}
var object = {
  valueOf: function () {
    return "%5E";
  },
  toString: function () {
    return {};
  }
};
if (decodeURI(object) !== "^") {}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return "%5E";
    }
  };
  if (decodeURI(object) !== "^") {}
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return "%5E";
  }
};
if (decodeURI(object) !== "^") {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "%5E";
  }
};
if (decodeURI(object) !== "^") {}
try {
  var object = {
    valueOf: function () {
      return "%5E";
    },
    toString: function () {
      throw "error";
    }
  };
  decodeURI(object);
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
  decodeURI(object);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}