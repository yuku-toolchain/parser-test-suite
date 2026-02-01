function foo() {
  "use strict";
  for (var tempIndex in this) {}
}
foo.call(foo);