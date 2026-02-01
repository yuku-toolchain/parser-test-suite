var callCount = 0;
var f;
f = function ({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}} = {
  w: undefined
}) {
  callCount = callCount + 1;
};
f();