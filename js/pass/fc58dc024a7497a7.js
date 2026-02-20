var iterCount = 0;
for (var {w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}} of [{
  w: {
    x: undefined,
    z: 7
  }
}]) {
  iterCount += 1;
}