var accessed = false;
var obj1 = {
  valueOf: function () {
    accessed = true;
    return 4;
  }
};
var obj2 = {
  valueOf: function () {
    return 2;
  }
};