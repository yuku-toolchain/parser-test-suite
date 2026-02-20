var ranCatch = false;
try {
  throw [];
} catch ([{u: v, w: x, y: z} = {
  u: 444,
  w: 555,
  y: 666
}]) {
  ranCatch = true;
}