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
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
} catch (e) {}
var object = {
  toString: function () {
    return 1;
  }
};
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
try {
  var object = {
    valueOf: function () {
      return 1;
    },
    toString: function () {
      throw "error";
    }
  };
  parseInt(object);
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
  parseInt(object);
} catch (e) {}