var callCount = 0;
var obj = {
  async *method({cover = function () {}, xCover = (0, function () {})} = {}) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);