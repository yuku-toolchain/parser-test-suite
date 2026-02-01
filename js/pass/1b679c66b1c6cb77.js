var x;
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
var fin = 0;
var i = 0;
for (x in mycars) {
  try {
    i += 1;
    continue;
  } catch (er1) {} finally {
    fin = 1;
  }
  fin = -1;
}
if (fin !== 1) {}
if (i !== 3) {}
var c2 = 0, fin2 = 0;
for (x in mycars) {
  try {
    throw "ex1";
  } catch (er1) {
    c2 += 1;
    continue;
  } finally {
    fin2 = 1;
  }
  fin2 = -1;
}
if (fin2 !== 1) {}
if (c2 !== 3) {}
var c3 = 0, fin3 = 0;
for (x in mycars) {
  try {
    throw "ex1";
  } catch (er1) {
    c3 += 1;
  } finally {
    fin3 = 1;
    continue;
  }
  fin3 = 0;
}
if (c3 !== 3) {}
if (fin3 !== 1) {}
var fin = 0;
for (x in mycars) {
  try {
    continue;
  } finally {
    fin = 1;
  }
  fin = -1;
}
if (fin !== 1) {}
var c5 = 0;
for (x in mycars) {
  try {
    throw "ex1";
  } catch (er1) {
    c5 += 1;
    continue;
  }
  c5 += 12;
}
if (c5 !== 3) {}
var c6 = 0, fin6 = 0;
for (x in mycars) {
  try {
    c6 += 1;
    throw "ex1";
  } finally {
    fin6 = 1;
    continue;
  }
  fin6 = -1;
}
if (fin6 !== 1) {}
if (c6 !== 3) {}