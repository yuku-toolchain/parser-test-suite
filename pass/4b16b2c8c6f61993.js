var x;
var count = 0;
var counter = 0;
for ({...x} of [{
  get v() {
    count++;
    return 2;
  }
}]) {
  counter += 1;
}