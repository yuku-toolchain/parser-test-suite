var obj = {
  toString: function () {
    return 0;
  }
};
var one = 1;
var _float = -(4 / 3);
var a = new Array(+0, true, 0, -0, false, undefined, null, "0", obj, _float, -(4 / 3), -1.3333333333333, "str", one, 1, false);