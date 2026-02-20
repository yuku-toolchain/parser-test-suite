try {
  do {
    var x = 1;
    abaracadabara;
  } while (0);
} catch (e) {
  if (e instanceof Test262Error) throw e;
}
if (x !== 1) {}