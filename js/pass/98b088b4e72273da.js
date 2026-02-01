var accessed = false;
var obj1 = {
  toString: function () {
    accessed = true;
    return 3;
  }
};
var obj2 = {
  toString: function () {
    return 4;
  }
};