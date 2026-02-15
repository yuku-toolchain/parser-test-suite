var count = 0;
var scope = {
  x: 1
};
with (scope) {
  (function () {
    "use strict";
    count++;
  })();
}