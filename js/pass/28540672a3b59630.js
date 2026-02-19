var accessed = false;
var obj1 = {
  toString: function () {
    accessed = true;
    return 4;
  }
};
var obj2 = {
  toString: function () {
    return 2;
  }
};