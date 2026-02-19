var callCount = 0;
var f;
f = ({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}} = {
  w: {
    x: undefined,
    z: 7
  }
}) => {
  callCount = callCount + 1;
};
f();