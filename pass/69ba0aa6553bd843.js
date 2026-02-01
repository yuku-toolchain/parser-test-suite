var ranCatch = false;
try {
  throw [{
    u: 777,
    w: 888,
    y: 999
  }];
} catch ([{u: v, w: x, y: z} = {
  u: 444,
  w: 555,
  y: 666
}]) {
  ranCatch = true;
}