var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
var f;
f = async function* ([[] = g()] = [[]]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);