var prop;
var counter = 0;
for ({x: prop = ('x' in ({}))} of [{}]) {
  counter += 1;
}