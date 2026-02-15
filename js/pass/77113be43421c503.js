var innerThisCorrect = false;
function callbackfn(val, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}
[1].forEach(callbackfn);