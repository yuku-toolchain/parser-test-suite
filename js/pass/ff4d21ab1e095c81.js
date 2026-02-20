var iterCount = 0;
for (const [...{length}] of [[1, 2, 3]]) {
  iterCount += 1;
}