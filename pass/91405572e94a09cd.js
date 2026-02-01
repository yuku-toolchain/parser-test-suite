var x;
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
var c1 = 0, fin = 0;
for (x in mycars) {
  try {
    c1 += 1;
    break;
  } catch (er1) {} finally {
    fin = 1;
    continue;
  }
  fin = -1;
  c1 += 2;
}
if (fin !== 1) {}
if (c1 !== 3) {}
var c2 = 0, fin2 = 0;
for (x in mycars) {
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
}
if (fin2 !== 1) {}
if (c2 !== 3) {}