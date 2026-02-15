var iterCount = 0;
for (const {w: [x, y, z] = [4, 5, 6]} of [{
  w: [7, undefined]
}]) {
  iterCount += 1;
}