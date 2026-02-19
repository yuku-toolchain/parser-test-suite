('x').replace(/x/, function () {
  "use strict";
  if (this === global) {}
  if (this !== undefined) {}
  return 'y';
});