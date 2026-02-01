var obj = {};
obj.pop = Array.prototype.pop;
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  }
};
var pop = obj.pop();
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  },
  toString() {
    return 0;
  }
};
var pop = obj.pop();
obj[0] = -1;
obj.length = {
  valueOf() {
    return 1;
  },
  toString() {
    return {};
  }
};
var pop = obj.pop();
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
  var pop = obj.pop();
} catch (e) {}
obj[0] = -1;
obj.length = {
  toString() {
    return 0;
  }
};
var pop = obj.pop();
obj[0] = -1;
obj.length = {
  valueOf() {
    return {};
  },
  toString() {
    return 0;
  }
};
var pop = obj.pop();
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
  var pop = obj.pop();
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
  var pop = obj.pop();
} catch (e) {}