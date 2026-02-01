var count = 0;
Object.defineProperty(this, "x", {
  configurable: true,
  value: 1
});
(function () {
  "use strict";
  count++;
})();