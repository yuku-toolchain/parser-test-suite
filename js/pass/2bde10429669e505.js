var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var f;
f = async function* h([] = iter) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);