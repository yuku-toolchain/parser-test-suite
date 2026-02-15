var obj = {};
obj.shift = Array.prototype.shift;
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  }
};
var shift = obj.shift();
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  },
  toString() {
    return 0;
  }
};
var shift = obj.shift();
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  },
  toString() {
    return {};
  }
};
var shift = obj.shift();
try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      return 1;
    },
    toString() {
      throw "error";
    }
  };
  var shift = obj.shift();
} catch (e) {}
obj[0] = -1;
obj.length = {
  toString() {
    return 0;
  }
};
var shift = obj.shift();
obj[0] = -1;
obj.length = {
  valueOf() {
    return {};
  },
  toString() {
    return 0;
  }
};
var shift = obj.shift();
try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      throw "error";
    },
    toString() {
      return 0;
    }
  };
  var shift = obj.shift();
} catch (e) {}
try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      return {};
    },
    toString() {
      return {};
    }
  };
  var shift = obj.shift();
} catch (e) {}