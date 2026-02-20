var count = 0;
var iterCount = 0;
for (const {...x} of [{
  get v() {
    count++;
    return 2;
  }
}]) {
  iterCount += 1;
}