var prop;
var counter = 0;
for ({prop = ('x' in ({}))} of [{}]) {
  counter += 1;
}