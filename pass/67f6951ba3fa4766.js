var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var f;
f = async function* h([...[]]) {
  callCount = callCount + 1;
};
f(iter).next().then(() => {}).then($DONE, $DONE);