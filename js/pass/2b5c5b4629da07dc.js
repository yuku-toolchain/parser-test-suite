var callCount = 0;
async function* f({cover = function () {}, xCover = (0, function () {})} = {}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);