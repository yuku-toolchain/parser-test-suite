var iterCount = 0;
for (const {a, b, ...rest} of [{
  x: 1,
  y: 2,
  a: 5,
  b: 3
}]) {
  iterCount += 1;
}