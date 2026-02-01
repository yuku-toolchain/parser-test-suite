var callCount = 0;
function f([{x, y, z} = {
  x: 44,
  y: 55,
  z: 66
}]) {
  callCount = callCount + 1;
}
f([{
  x: 11,
  y: 22,
  z: 33
}]);