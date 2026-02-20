var object = {
  valueOf: function () {
    return 2;
  }
};
var object = {
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 1;
  }
};
var object = {
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return {};
  }
};
try {
  var object = {
    valueOf: function () {
      return 2;
    },
    toString: function () {
      throw "error";
    }
  };
} catch (e) {}
var object = {
  toString: function () {
    return 2;
  }
};
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 2;
  }
};
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 2;
    }
  };
  parseInt("11", object);
} catch (e) {}
try {
  var object = {
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  };
  parseInt("11", object);
} catch (e) {}