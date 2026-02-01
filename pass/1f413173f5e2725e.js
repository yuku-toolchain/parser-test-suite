var initCount = 0;
var callCount = 0;
var f;
f = async function* h([[] = (function () {
  initCount += 1;
})()]) {
  callCount = callCount + 1;
};
f([[23]]).next().then(() => {}).then($DONE, $DONE);