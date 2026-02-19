var obj = {};
obj.unshift = Array.prototype.unshift;
obj.length = {
  valueOf() {
    return 3;
  }
};
var unshift = obj.unshift();
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return 1;
  }
};
var unshift = obj.unshift();
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return {};
  }
};
var unshift = obj.unshift();
try {
  obj.length = {
    valueOf() {
      return 3;
    },
    toString() {
      throw "error";
    }
  };
  var unshift = obj.unshift();
} catch (e) {}
obj.length = {
  toString() {
    return 1;
  }
};
var unshift = obj.unshift();
obj.length = {
  valueOf() {
    return {};
  },
  toString() {
    return 1;
  }
};
var unshift = obj.unshift();
try {
  obj.length = {
    valueOf() {
      throw "error";
    },
    toString() {
      return 1;
    }
  };
  var unshift = obj.unshift();
} catch (e) {}
try {
  obj.length = {
    valueOf() {
      return {};
    },
    toString() {
      return {};
    }
  };
  var unshift = obj.unshift();
} catch (e) {}