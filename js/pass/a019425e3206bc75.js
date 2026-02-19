var object = {
  valueOf: function () {
    return 1;
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return 0;
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    return {};
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    return 1;
  },
  toString: function () {
    throw "error";
  }
};
if (!object !== false) {}
var object = {
  toString: function () {
    return 1;
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    throw "error";
  },
  toString: function () {
    return 1;
  }
};
if (!object !== false) {}
var object = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};
if (!object !== false) {}