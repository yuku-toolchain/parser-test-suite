var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var callCount = 0;
var f;
f = async function* ({...rest} = o) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);