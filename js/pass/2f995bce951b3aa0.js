var iterCount = 0;
for (const [{u: v, w: x, y: z} = {
  u: 444,
  w: 555,
  y: 666
}] of [[{
  u: 777,
  w: 888,
  y: 999
}]]) {
  iterCount += 1;
}