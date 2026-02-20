var o = {};
var x = 2;
Object.defineProperty(o, "foo", {
  set: function (stuff) {
    "use strict";
    x = this;
  }
});
o.foo = 3;