var obj = {};
obj.join = Array.prototype.join;
obj.length = {
  valueOf() {
    return 3;
  }
};
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return 2;
  }
};
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {
    return {};
  }
};
obj.length = {
  valueOf() {
    return 3;
  },
  toString() {}
};
obj.length = {
  toString() {
    return 2;
  }
};
obj.length = {
  valueOf() {
    return {};
  },
  toString() {
    return 2;
  }
};