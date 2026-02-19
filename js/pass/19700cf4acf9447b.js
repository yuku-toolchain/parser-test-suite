var obj = {
  valueOf: function () {}
};
var ta = new Int8Array();
var other = new DataView(new SharedArrayBuffer(1), 0);