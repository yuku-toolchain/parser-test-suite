var x = [];
var object = {
  valueOf: function () {
    return 1;
  }
};
x[object] = 0;
x = [];
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
x[object] = 0;
x = [];
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
x[object] = 0;
try {
  x = [];
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
  x[object] = 0;
} catch (e) {}
x = [];
var object = {
  toString: function () {
    return 1;
  }
};
x[object] = 0;
x = [];
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
x[object] = 0;
try {
  x = [];
  var object = {
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  };
  x[object];
} catch (e) {}
try {
  x = [];
  var object = {
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  };
  x[object];
} catch (e) {}