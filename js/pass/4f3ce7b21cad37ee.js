var callCount = 0;
var f;
f = async function* ({cover = function () {}, xCover = (0, function () {})} = {}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);