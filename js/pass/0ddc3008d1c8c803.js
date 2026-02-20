var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var f;
f = async function* h({s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()}) {
  callCount = callCount + 1;
};
f({
  s: null,
  u: 0,
  w: false,
  y: ''
}).next().then(() => {}).then($DONE, $DONE);