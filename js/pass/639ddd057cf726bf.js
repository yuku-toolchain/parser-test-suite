var fin = 0;
for (var i = 0; i < 5; i++) {
  try {
    i += 1;
    continue;
  } catch (er1) {} finally {
    fin = 1;
  }
  fin = -1;
}
if (fin !== 1) {}
var c2 = 0, fin2 = 0;
for (var i = 0; i < 5; i++) {
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
if (c2 !== 5) {}
var c3 = 0, fin3 = 0;
for (var i = 0; i < 5; i++) {
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
if (fin3 !== 1) {}
if (c3 !== 5) {}
var fin = 0;
for (var i = 0; i < 5; i++) {
  try {
    i += 1;
    continue;
  } finally {
    fin = 1;
  }
  fin = -1;
}
if (fin !== 1) {}
var c5 = 0;
for (var c5 = 0; c5 < 10; ) {
  try {
    throw "ex1";
  } catch (er1) {
    c5 += 1;
    continue;
  }
  c5 += 12;
}
if (c5 !== 10) {}
var c6 = 0, fin6 = 0;
for (var c6 = 0; c6 < 10; ) {
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
if (c6 !== 10) {}