var x = [];
x.length = {
  valueOf: function () {
    return 2;
  }
};
x = [];
x.length = {
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 1;
  }
};
x = [];
x.length = {
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return {};
  }
};
try {
  x = [];
  x.length = {
    valueOf: function () {
      return 2;
    },
    toString: function () {
      throw "error";
    }
  };
} catch (e) {}
x = [];
x.length = {
  toString: function () {
    return 1;
  }
};
x = [];
x.length = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
try {
  x = [];
  x.length = {
    valueOf: function () {
      throw "error";
    },
    toString: function () {
      return 1;
    }
  };
  x.length;
} catch (e) {}
try {
  x = [];
  x.length = {
    valueOf: function () {
      return {};
    },
    toString: function () {
      return {};
    }
  };
  x.length;
} catch (e) {}