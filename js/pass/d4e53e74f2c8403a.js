var obj = {};
obj.push = Array.prototype.push;
obj.length = {
  valueOf() {
    return 3;
  }
};
var push = obj.push();
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return 1;
  }
};
var push = obj.push();
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return {};
  }
};
var push = obj.push();
try {
  obj.length = {
    valueOf() {
      return 3;
    },
    toString() {
      throw "error";
    }
  };
  var push = obj.push();
} catch (e) {}
obj.length = {
  toString() {
    return 1;
  }
};
var push = obj.push();
obj.length = {
  valueOf() {
    return {};
  },
  toString() {
    return 1;
  }
};
var push = obj.push();
try {
  obj.length = {
    valueOf() {
      throw "error";
    },
    toString() {
      return 1;
    }
  };
  var push = obj.push();
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
  var push = obj.push();
} catch (e) {}