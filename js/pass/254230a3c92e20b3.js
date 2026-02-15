var innerThisCorrect = false;
function callbackfn(prevVal, curVal, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}
[0].reduce(callbackfn, true);