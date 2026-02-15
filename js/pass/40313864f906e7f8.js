var c = 0, i = 0;
var fin = 0;
while (i < 10) {
  i += 1;
  try {
    if (c === 0) {
      throw "ex1";
    }
    c += 2;
    if (c === 1) {
      throw "ex2";
    }
  } catch (er1) {
    c -= 1;
    continue;
  } finally {
    fin += 1;
  }
}
if (fin !== 10) {}