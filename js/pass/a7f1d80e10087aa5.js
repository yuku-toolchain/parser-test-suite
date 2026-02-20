var count = 0;
var iterCount = 0;
for (const {...x} = {
  get v() {
    count++;
    return 2;
  }
}; iterCount < 1; ) {
  iterCount += 1;
}