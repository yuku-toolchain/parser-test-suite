var x = 0;
if (void (x = 1) !== undefined) {} else {
  if (x !== 1) {}
}