var object = {
  valueOf: function () {
    return 1;
  }
};
var y = object--;
if (y !== 1) {} else {
  if (object !== 1 - 1) {}
}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
var y = object--;
if (y !== 1) {} else {
  if (object !== 1 - 1) {}
}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
var y = object--;
if (y !== 1) {} else {
  if (object !== 1 - 1) {}
}
try {
  var object = {
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  };
  var y = object--;
  if (y !== 1) {} else {
    if (object !== 1 - 1) {}
  }
} catch (e) {
  if (e === "error") {} else {}
}
var object = {
  toString: function () {
    return 1;
  }
};
var y = object--;
if (y !== 1) {} else {
  if (object !== 1 - 1) {}
}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
var y = object--;
if (y !== 1) {} else {
  if (object !== 1 - 1) {}
}
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
  var y = object--;
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
  var y = object--;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}