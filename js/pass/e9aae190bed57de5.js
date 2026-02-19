var dataView = new DataView(new ArrayBuffer(16), 0);
var poisoned = {
  valueOf: function () {}
};