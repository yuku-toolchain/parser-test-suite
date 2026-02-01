var count = 0;
Object.defineProperty(this, "x", {
  configurable: true,
  get: function () {
    delete this.x;
    return 2;
  }
});
(function () {
  "use strict";
  count++;
})();