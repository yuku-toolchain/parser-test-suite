var ranCatch = false;
try {
  throw {
    w: {
      x: undefined,
      z: 7
    }
  };
} catch ({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}}) {
  ranCatch = true;
}