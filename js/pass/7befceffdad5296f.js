var o = {};
Object.defineProperty(o, "foo", {
  get: function () {
    "use strict";
    return this;
  }
});