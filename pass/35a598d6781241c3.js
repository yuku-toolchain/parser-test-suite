var iterCount = 0;
for (var {a, b, ...rest} of [{
  x: 1,
  y: 2,
  a: 5,
  b: 3
}]) {
  iterCount += 1;
}