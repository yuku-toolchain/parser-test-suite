var c1 = 0, fin = 0;
do {
  try {
    c1 += 1;
    break;
  } catch (er1) {} finally {
    fin = 1;
    continue;
  }
  fin = -1;
  c1 += 2;
} while (c1 < 2);
if (fin !== 1) {}
if (c1 !== 2) {}
var c2 = 0, fin2 = 0;
do {
  try {
    throw "ex1";
  } catch (er1) {
    c2 += 1;
    break;
  } finally {
    fin2 = 1;
    continue;
  }
  c2 += 2;
  fin2 = -1;
} while (c2 < 2);
if (fin2 !== 1) {}
if (c2 !== 2) {}