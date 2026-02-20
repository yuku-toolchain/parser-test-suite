var ranCatch = false;
try {
  throw [];
} catch ([{x, y, z} = {
  x: 44,
  y: 55,
  z: 66
}]) {
  ranCatch = true;
}