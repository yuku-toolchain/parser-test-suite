var count = 0;
var scope = {
  get x() {
    delete this.x;
    return 16;
  }
};
with (scope) {
  (function () {
    "use strict";
    count++;
  })();
}