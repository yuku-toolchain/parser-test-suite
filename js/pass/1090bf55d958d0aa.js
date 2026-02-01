var _NaN = NaN;
var a = new Array("NaN", undefined, 0, false, null, {
  toString: function () {
    return NaN;
  }
}, "false", _NaN, NaN);