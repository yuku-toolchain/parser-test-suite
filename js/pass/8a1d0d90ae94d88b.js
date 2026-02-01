var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var f;
f = async function* h({w = counter(), x = counter(), y = counter(), z = counter()} = {
  w: null,
  x: 0,
  y: false,
  z: ''
}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);