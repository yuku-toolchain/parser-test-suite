var callCount = 0;
var f;
f = async function* h([{u: v, w: x, y: z} = {
  u: 444,
  w: 555,
  y: 666
}]) {
  callCount = callCount + 1;
};
f([{
  u: 777,
  w: 888,
  y: 999
}]).next().then(() => {}).then($DONE, $DONE);