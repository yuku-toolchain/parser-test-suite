var flag1 = false;
var flag2 = false;
var x, y;
var counter = 0;
for ({x: x = flag1 = true, y: y = flag2 = true} of [{
  y: 1
}]) {
  counter += 1;
}