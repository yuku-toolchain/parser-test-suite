var ranCatch = false;
try {
  throw {
    w: undefined
  };
} catch ({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}}) {
  ranCatch = true;
}