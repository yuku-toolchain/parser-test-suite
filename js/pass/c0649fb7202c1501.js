var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
var f;
f = async function* h([[...x] = (function () {
  initCount += 1;
})()]) {
  callCount = callCount + 1;
};
f([values]).next().then(() => {}).then($DONE, $DONE);