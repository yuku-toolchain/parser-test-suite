var obj = {};
Object.defineProperty(obj, "accProperty", {
  get: function () {
    test262unresolvable = null;
    "use strict";
    return 11;
  }
});