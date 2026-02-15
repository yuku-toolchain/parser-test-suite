var dataView = new DataView(new ArrayBuffer(8), 0);
var poisoned = {
  valueOf: function () {}
};