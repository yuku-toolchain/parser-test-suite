var arrow;
var counter = 0;
for ({x: arrow = () => {}} of [{}]) {
  counter += 1;
}