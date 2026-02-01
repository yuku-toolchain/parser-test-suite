var iterCount = 0;
for (const [...[x, y, z]] of [[3, 4, 5]]) {
  iterCount += 1;
}