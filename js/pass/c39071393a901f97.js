var iter = (function* () {})();
iter.next();
var callCount = 0;
var f;
f = async function* ([]) {
  callCount = callCount + 1;
};
f(iter).next().then(() => {}).then($DONE, $DONE);