var count = 0;
var iterCount = 0;
for (var {...x} of [{
  get v() {
    count++;
    return 2;
  }
}]) {
  iterCount += 1;
}