var iter = (function* () {})();
iter.next();
var callCount = 0;
var f;
f = async function* h([] = iter) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);