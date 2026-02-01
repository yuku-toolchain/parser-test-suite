{
  var counter = 0;
  for ({x: unresolvable} of [{}]) {
    counter += 1;
  }
}