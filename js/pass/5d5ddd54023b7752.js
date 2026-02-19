var begin, end;
var o1 = {
  valueOf: function () {
    begin = true;
    return 0;
  }
};
var o2 = {
  valueOf: function () {
    end = true;
    return 2;
  }
};