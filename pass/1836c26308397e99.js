var count = 0;
var scope = {
  get x() {
    delete this.x;
    return 5;
  }
};
with (scope) {
  (function () {
    "use strict";
    count++;
  })();
}