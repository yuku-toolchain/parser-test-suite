var x = new Array(0, 1, 2, 3);
var object = {
  valueOf() {
    return "+";
  }
};
var object = {
  valueOf() {
    return "+";
  },
  toString() {
    return "*";
  }
};
var object = {
  valueOf() {
    return "+";
  },
  toString() {
    return {};
  }
};
try {
  var object = {
    valueOf() {
      throw "error";
    },
    toString() {
      return "*";
    }
  };
} catch (e) {}
var object = {
  toString() {
    return "*";
  }
};
var object = {
  valueOf() {
    return {};
  },
  toString() {
    return "*";
  }
};
try {
  var object = {
    valueOf() {
      return "+";
    },
    toString() {
      throw "error";
    }
  };
  x.join(object);
} catch (e) {}
try {
  var object = {
    valueOf() {
      return {};
    },
    toString() {
      return {};
    }
  };
  x.join(object);
} catch (e) {}
try {
  var object = {
    toString() {
      throw "error";
    }
  };
  [].join(object);
} catch (e) {}