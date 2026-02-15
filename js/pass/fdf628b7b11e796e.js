var trapCalls = 0;
var p = new Proxy({
  prop: 1
}, {
  deleteProperty: function (t, prop) {
    Object.preventExtensions(t);
    trapCalls++;
    return true;
  }
});