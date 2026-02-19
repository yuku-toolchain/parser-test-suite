function base() {}
var b = new base();
var prop = new Object();
var d = Object.create(b, {
  "x": {
    value: true,
    writable: false
  },
  "y": {
    value: "str",
    writable: false
  }
});