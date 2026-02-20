var object = {
  valueOf: function () {
    return "+";
  }
};
var x = new Array(object);
var object = {
  valueOf: function () {
    return "+";
  },
  toString: function () {
    return "*";
  }
};
var x = new Array(object);
var object = {
  valueOf: function () {
    return "+";
  },
  toString: function () {
    return {};
  }
};
var x = new Array(object);
try {
  var object = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return "*";
    }
  };
  var x = new Array(object);
} catch (e) {}
var object = {
  toString: function () {
    return "*";
  }
};
var x = new Array(object);
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "*";
  }
};
var x = new Array(object);
try {
  var object = {
    valueOf: function () {
      return "+";
    },
    toString: function () {
      throw "error";
    }
  };
  var x = new Array(object);
  x.join();
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
  var x = new Array(object);
  x.join();
} catch (e) {}